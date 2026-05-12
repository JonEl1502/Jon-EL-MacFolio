// Registry of "apps" shown on the Android home screen.
// Source of truth for icon, label, gradient backdrop, and which content
// component renders inside the AppFrame when the user taps the icon.
//
// Project apps are derived from locations.workhome.children so the desktop
// macOS view and the mobile Android view stay in sync automatically.

import {locations} from '#constants'

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
    {id: 'about',     kind: 'system-about',     name: 'About Me',   icon: '/images/contact.png'},
    {id: 'socials',   kind: 'system-socials',   name: 'Socials',    icon: '/images/figma.png'},
]

const projectApps = (locations.workhome?.children || []).map((p) => {
    const url = p.children?.find?.((c) => c.fileType === 'url')?.href
    const screenshots = p.children?.filter?.((c) => c.fileType === 'img').map((c) => c.imageUrl) || []
    const description = p.children?.find?.((c) => c.fileType === 'txt')?.description || []
    return {
        id: `project-${p.id}`,
        kind: 'project',
        name: p.name,
        // Explicit appIcon wins (e.g. favicon for self-portfolio entry); else
        // fall back to first screenshot, else the folder icon.
        icon: p.appIcon || screenshots[0] || p.icon,
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
