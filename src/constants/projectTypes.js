// Project type metadata, shared by the desktop home and the mobile app grid.
// A project's `project_type` may be a single string or an array (e.g. a
// dashboard that is both a web app and a PHP backend → ["web_app", "be_app"]).
import {Globe, Server, Smartphone} from 'lucide-react'

export const TYPE_META = {
    web_app: {label: 'Web app',    Icon: Globe,      bg: '#2563eb'}, // blue
    be_app:  {label: 'Backend',    Icon: Server,     bg: '#16a34a'}, // green — default backend icon
    mob_app: {label: 'Mobile app', Icon: Smartphone, bg: '#7c3aed'}, // violet
}

// Normalize project_type into a clean list of known types.
export const typeList = (pt) =>
    (Array.isArray(pt) ? pt : pt ? [pt] : []).filter((t) => TYPE_META[t])

export const hasType = (pt, t) => typeList(pt).includes(t)
