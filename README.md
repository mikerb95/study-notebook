# Study Notebook

Un sitio de apuntes estilo Notion usando Markdown + VitePress. Cada clase o apunte es un `.md` que puedes leer directamente en GitHub o como sitio estático.

- Sitio local: carpeta `docs` con VitePress.
- En GitHub, este `README.md` actúa como portada del repo.

## Estructura

```
study-notebook/
├─ docs/
│  ├─ index.md
│  ├─ clases/
│  │  ├─ README.md
│  │  ├─ 2025-01-intro-programacion.md
│  │  └─ 2025-02-estructuras-datos.md
│  └─ .vitepress/
│     └─ config.ts
├─ .github/
│  └─ workflows/
│     └─ deploy.yml
└─ package.json
```

## Desarrollo

1. Instala dependencias.
2. Ejecuta el sitio local.
3. Agrega tus apuntes en `docs/clases/*.md`.

## Comandos básicos

```powershell
# Instalar dependencias
npm install

# Levantar el sitio en local
npm run start

# Compilar para producción
npm run docs:build

# Previsualizar la compilación
npm run docs:preview
```

## Despliegue en GitHub Pages (opcional)

- Sube el repo a GitHub.
- Habilita Pages con "Source: GitHub Actions".
- El workflow incluido `deploy.yml` publicará automáticamente en cada push a `main`.

## Cómo agregar nuevos apuntes

- Crea un archivo `.md` en `docs/clases/` con un título H1 al inicio.
- Se añadirá al sidebar automáticamente.
- Edita `docs/clases/README.md` para listar manualmente el índice (opcional).
