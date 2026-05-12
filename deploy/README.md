# Deploy

This is a Vite/React static site deployed to the Hostinger VPS at `148.230.126.79`,
fronted by the shared Caddy edge at `/srv/vethub/edge/`.

## Layout on the VPS

```
/srv/kabiu-john/
  docker-compose.yml   # synced from this repo's deploy/
  nginx.conf           # synced from this repo's deploy/
  web/                 # built dist/ — rsync'd by CI on every push to main
```

The `web` service joins the external `web` Docker network with alias
`kabiu-john-web`. Caddy proxies `kabiu-john.com` to `kabiu-john-web:80`.

## Deploy

Automatic on push to `main` via `.github/workflows/deploy.yml`:

1. CI runs `npm ci && npm run build`.
2. `rsync` copies `dist/` to `ubuntu@148.230.126.79:/srv/kabiu-john/web/`.
3. nginx serves the new files immediately (read-only bind mount, no container restart).

Cache-busting is automatic: Vite fingerprints `/assets/*` filenames, and the
nginx config sends `Cache-Control: no-cache` for `index.html` so browsers always
fetch the new asset manifest.

## First-time bootstrap

```bash
ssh ubuntu@148.230.126.79
sudo mkdir -p /srv/kabiu-john/web && sudo chown -R ubuntu:ubuntu /srv/kabiu-john
# (CI pushes docker-compose.yml + nginx.conf as part of the rsync step too)
cd /srv/kabiu-john
docker compose up -d
```

Then in `/srv/vethub/edge/Caddyfile`, add:

```
kabiu-john.com, www.kabiu-john.com {
    encode gzip
    reverse_proxy kabiu-john-web:80
}
```

`docker compose -f /srv/vethub/edge/docker-compose.yml exec caddy caddy reload --config /etc/caddy/Caddyfile`
— zero downtime, Let's Encrypt cert issued on first HTTPS request once DNS resolves.

## Rollback

```bash
ssh ubuntu@148.230.126.79
cd /srv/kabiu-john
# CI keeps a timestamped backup of the previous web/ in web.prev/
ls web.prev/
rm -rf web && mv web.prev web
```
