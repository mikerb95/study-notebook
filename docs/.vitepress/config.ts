import { defineConfig } from 'vitepress'
import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

// Enlace a tu repo y base para GitHub Pages en subruta
const GITHUB_REPO = 'https://github.com/mikerb95/study-notebook'

const dirname = fileURLToPath(new URL('.', import.meta.url))
const clasesDir = path.resolve(dirname, '../clases')

function getFirstHeading(filePath: string): string | null {
  try {
    const content = fs.readFileSync(filePath, 'utf-8')
    const lines = content.split(/\r?\n/)
    for (const line of lines) {
      const m = /^#\s+(.+)$/.exec(line.trim())
      if (m) return m[1]
    }
  } catch {}
  return null
}

function getClasesSidebar() {
  if (!fs.existsSync(clasesDir)) return []
  const entries = fs
    .readdirSync(clasesDir)
    .filter((f) => f.endsWith('.md') && !/^readme\.md$/i.test(f) && !/^index\.md$/i.test(f))
    .sort()
    .map((filename) => {
      const full = path.join(clasesDir, filename)
      const title = getFirstHeading(full) || filename.replace(/\.md$/, '')
      return { text: title, link: `/clases/${filename.replace(/\.md$/, '')}` }
    })

  return [
    {
      text: 'Clases',
      items: entries,
    },
  ]
}

export default defineConfig({
  lang: 'es-ES',
  title: 'Study Notebook',
  description: 'Apuntes en Markdown estilo Notion',
  base: '/study-notebook/',
  themeConfig: {
    nav: [
      { text: 'Inicio', link: '/' },
      { text: 'Clases', link: '/clases/' },
    ],
    sidebar: {
      '/clases/': getClasesSidebar(),
    },
    outline: 'deep',
    search: { provider: 'local' },
    socialLinks: [
      { icon: 'github', link: GITHUB_REPO },
    ],
    footer: {
      message: 'Hecho con VitePress',
    },
  },
})
