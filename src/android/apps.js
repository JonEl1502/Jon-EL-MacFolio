// Registry of "apps" shown on the Android home screen.
// Source of truth for icon, label, gradient backdrop, and which content
// component renders inside the AppFrame when the user taps the icon.
//
// Project apps are derived from locations.workhome.children so the desktop
// macOS view and the mobile Android view stay in sync automatically.

import {locations} from '#constants'
import {typeList} from '#constants/projectTypes.js'

// Material You-ish gradient palettes — light, pastel, two-stop linear.
const palettes = [
    ['#FCE7F3', '#F9A8D4'], // pink
    ['#DBEAFE', '#93C5FD'], // blue
    ['#DCFCE7', '#86EFAC'], // green
    ['#FEF3C7', '#FCD34D'], // amber
    ['#EDE9FE', '#C4B5FD'], // violet
    ['#CFFAFE', '#67E8F9'], // cyan
    ['#FFE4E6', '#FDA4AF'], // rose
    ['#F1F5F9', '#CBD5E1'], // slate
]

const pickPalette = (seed) => {
    const s = String(seed)
    let h = 0
    for (let i = 0; i < s.length; i++) h = (h * 31 + s.charCodeAt(i)) | 0
    return palettes[Math.abs(h) % palettes.length]
}

const systemApps = [
    {id: 'portfolio', kind: 'system-portfolio', name: 'Portfolio',  icon: '/images/finder.png'},
    {id: 'articles',  kind: 'system-articles',  name: 'Articles',   icon: '/images/safari.png'},
    {id: 'gallery',   kind: 'system-gallery',   name: 'Gallery',    icon: '/images/photos.png'},
    {id: 'skills',    kind: 'system-skills',    name: 'Skills',     icon: '/images/terminal.png'},
    {id: 'expertise', kind: 'system-expertise', name: 'Expertise',  icon: '/images/figma.png'},
    {id: 'timeline',  kind: 'system-timeline',  name: 'Timeline',   icon: '/images/folder3.png'},
    {id: 'otherworks',kind: 'system-otherworks',name: 'Other Works',icon: '/images/folder2.png'},
    {id: 'about',     kind: 'system-about',     name: 'About Me',   icon: '/images/contact.png'},
    {id: 'socials',   kind: 'system-socials',   name: 'Socials',    icon: '/images/figma.png'},
]

// Derive a high-res favicon URL from a project's live URL using Google's
// public favicon service. Returns null for missing/invalid URLs so the
// fallback chain in `icon` continues.
//
// Aggregator domains (Play Store, App Store, code hosts) return the
// aggregator's own icon, not the project's identity, so skip them and
// let the next fallback (screenshot) win.
const AGGREGATOR_HOSTS = new Set([
    'play.google.com',
    'apps.apple.com',
    'github.com',
    'gitlab.com',
    'bitbucket.org',
])
const faviconFor = (href) => {
    if (!href) return null
    try {
        const host = new URL(href).hostname
        if (AGGREGATOR_HOSTS.has(host)) return null
        return `https://www.google.com/s2/favicons?domain=${host}&sz=128`
    } catch {
        return null
    }
}

// Only projects flagged for the home (desktop_home !== false) become app icons.
const projectApps = (locations.workhome?.children || []).filter((p) => p.desktop_home !== false).map((p) => {
    const url = p.children?.find?.((c) => c.fileType === 'url')?.href
    const screenshots = p.children?.filter?.((c) => c.fileType === 'img').map((c) => c.imageUrl) || []
    // Prefer a README.md (the fuller write-up) for the mobile project view;
    // otherwise fall back to the first text file's description.
    const txts = p.children?.filter?.((c) => c.fileType === 'txt') || []
    const description = (txts.find((c) => /readme/i.test(c.name)) || txts[0])?.description || []

    // Priority: explicit appIcon (hand-saved brand logo) → first project
    // screenshot → site favicon → folder icon. Screenshots beat favicons
    // because most projects (Vercel-deployed apps especially) ship no real
    // favicon and Google's S2 service returns a generic globe placeholder
    // for them. Track which fallback was chosen so screenshots can render
    // cover-full (cropped square, like the Portfolio list) while logos
    // stay centered inside the gradient tile.
    let icon, iconFit
    if (p.appIcon) { icon = p.appIcon; iconFit = 'contain' }
    else if (screenshots[0]) { icon = screenshots[0]; iconFit = 'cover' }
    else {
        const fav = faviconFor(url)
        if (fav) { icon = fav; iconFit = 'contain' }
        else { icon = p.icon; iconFit = 'contain' }
    }

    const types = typeList(p.project_type)

    // Mobile apps render their logo edge-to-edge in the rounded tile so it
    // reads like a phone home-screen app icon.
    if (types.includes('mob_app')) iconFit = 'cover'

    return {
        id: `project-${p.id}`,
        kind: 'project',
        name: p.name,
        icon,
        iconFit,
        types,
        data: {name: p.name, url, screenshots, description},
    }
})

const withPalette = (app) => ({...app, palette: pickPalette(app.id)})

// Apps pinned to the persistent bottom dock — primary navigation.
// Order matches the old nav-tab order: Projects, Contact, Resume.
export const dockApps = [
    {id: 'projects', kind: 'system-portfolio', name: 'Projects', icon: '/images/folder.png'},
    {id: 'contact',  kind: 'system-contact',   name: 'Contact',  icon: '/images/contact.png'},
    {id: 'resume',   kind: 'system-resume',    name: 'Resume',   icon: '/images/pdf.png'},
].map(withPalette)

// Everything else lives on the home grid. Drop "Portfolio" since it's now
// in the dock as "Projects" and the home grid lists the projects directly.
export const homeApps = [
    ...systemApps.filter((a) => a.id !== 'portfolio'),
    ...projectApps,
].map(withPalette)

export const allApps = [...homeApps, ...dockApps]
