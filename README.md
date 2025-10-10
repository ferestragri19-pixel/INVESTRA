# Deploy rápido (GitHub Pages / Netlify)

Este sitio es estático (HTML/CSS/JS). Puedes compartirlo sin comprar dominio usando:

## Opción A: GitHub Pages

1. Crea un repositorio en tu cuenta de GitHub (público), por ejemplo `agency_site`.
2. En tu computadora:
   ```bash
   git init
   git remote add origin https://github.com/TU_USUARIO/agency_site.git
   git add .
   git commit -m "Deploy inicial"
   git branch -M main
   git push -u origin main
   ```
3. En GitHub: Settings → Pages → Build and deployment
   - Source: Deploy from a branch
   - Branch: `main` / `/root`
4. URL pública: `https://TU_USUARIO.github.io/agency_site/`

Notas:
- Este repo incluye `.nojekyll` para evitar procesado Jekyll.
- Los enlaces son relativos, así que funcionan en subcarpeta (`/agency_site/`).

## Opción B: Netlify (Drag & Drop)

1. Ve a https://app.netlify.com/ → Sites → Drag & drop.
2. Arrastra la carpeta del proyecto completa.
3. Obtendrás una URL tipo `https://tu-sitio.netlify.app`.

## Dominio propio (opcional)

- Compra dominio (Cloudflare/Namecheap/Porkbun). Luego:
  - GitHub Pages: en Settings → Pages agrega el Custom domain y crea un CNAME `www` → `TU_USUARIO.github.io` (y A records para el apex si lo deseas).
  - Netlify: Domain settings → Add domain → CNAME `www` → `tu-sitio.netlify.app`.

## Formularios

Los formularios actualmente no envían a un backend. Opciones:
- Netlify Forms (si hospedado en Netlify).
- Servicios como Formspree o EmailJS.

