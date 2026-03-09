/**
 * generate-sitemap.js
 * Auto-generates public/sitemap.xml from the slug registry in ArticlePage.jsx
 *
 * Usage:
 *   npm run sitemap
 *
 * Add new articles to ArticlePage.jsx as normal — run this script to rebuild the sitemap.
 * Order in sitemap reflects order in ArticlePage's articleComponents object (newest first
 * as long as you keep appending new entries at the bottom).
 */

import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const SITE_URL = 'https://scalesai.online'
const today = new Date().toISOString().split('T')[0]

// ---------------------------------------------------------------------------
// 1. Read ArticlePage.jsx and extract every slug key from articleComponents
// ---------------------------------------------------------------------------
const articlePagePath = path.join(__dirname, '../src/pages/ArticlePage.jsx')
const content = fs.readFileSync(articlePagePath, 'utf-8')

// Match lines of the form:   'slug-goes-here': ComponentName,
// Slugs contain only lowercase letters, digits and hyphens.
const slugRegex = /^\s+'([a-z0-9][a-z0-9-]+)':\s+\w/gm
const slugs = []
let match
while ((match = slugRegex.exec(content)) !== null) {
  slugs.push(match[1])
}

if (slugs.length === 0) {
  console.error('❌  No slugs found — check the regex or ArticlePage.jsx format.')
  process.exit(1)
}

// Reverse so newest (last added) appears first in the sitemap
const orderedSlugs = [...slugs].reverse()

// ---------------------------------------------------------------------------
// 2. Build XML
// ---------------------------------------------------------------------------
const articleEntries = orderedSlugs
  .map(
    (slug) => `  <url>
    <loc>${SITE_URL}/featured/${slug}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>`
  )
  .join('\n\n')

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">

  <!-- Homepage -->
  <url>
    <loc>${SITE_URL}/</loc>
    <lastmod>2026-03-06</lastmod>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
  </url>

  <!-- Blog articles — newest first -->
${articleEntries}

</urlset>
`

// ---------------------------------------------------------------------------
// 3. Write to public/sitemap.xml
// ---------------------------------------------------------------------------
const sitemapPath = path.join(__dirname, '../public/sitemap.xml')
fs.writeFileSync(sitemapPath, sitemap, 'utf-8')

console.log(`✅  sitemap.xml regenerated — ${slugs.length} articles included.`)
console.log(`    Written to: ${sitemapPath}`)
