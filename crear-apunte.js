#!/usr/bin/env node
// Script para crear un nuevo apunte en docs/clases con fecha y título
const fs = require('fs')
const path = require('path')

function slugify(text) {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9áéíóúüñ\s-]/gi, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .replace(/^-|-$/g, '')
}

const args = process.argv.slice(2)
if (args.length < 1) {
  console.log('Uso: node crear-apunte.js "Título de la clase"')
  process.exit(1)
}

const titulo = args.join(' ')
const fecha = new Date()
const yyyy = fecha.getFullYear()
const mm = String(fecha.getMonth() + 1).padStart(2, '0')
const slug = slugify(titulo)
const nombreArchivo = `${yyyy}-${mm}-${slug}.md`
const ruta = path.join(__dirname, 'docs', 'clases', nombreArchivo)

const contenido = `# ${titulo}

Resumen breve de la clase.

## Contenidos
- Punto 1
- Punto 2

## Recursos
- Enlace 1
`

if (fs.existsSync(ruta)) {
  console.log(`Ya existe: ${ruta}`)
  process.exit(1)
}

fs.writeFileSync(ruta, contenido)
console.log(`Apunte creado: ${ruta}`)
