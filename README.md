# SopirAgen

Situs statis Astro untuk playbook dan eksperimen delegasi AI berbahasa Indonesia.

## Menjalankan lokal

```bash
npm install
npm run dev
```

Build produksi dan pemeriksaan tipe:

```bash
npm run build
npm run preview
```

## Menambah artikel

Buat Markdown di `src/content/artikel/` dengan frontmatter:

```yaml
---
title: "Judul"
description: "Ringkasan"
pilar: "eksperimen-7-hari" # atau playbook-sop-ai, kantor-manusia, studio-log
date: 2026-03-16
minutes: 8
---
```

Schema collection berada di `src/content.config.ts`. Empat landing page pilar dibuat otomatis dari `src/data/pillars.ts`.

## Lead magnet dan signup

- PDF publik: `public/playbook-sop-delegasi.pdf` (sumber: `playbook.md`).
- Signup memakai `mailto:` agar bekerja tanpa backend dan data tidak diserahkan ke vendor. Ganti `halo@sopiragen.id` di komponen/layout bila alamat produksi berbeda.

## Analytics

Event ringan disimpan di `window.saEvents` dan dipancarkan sebagai event DOM `sopiragen:event`:

- `organic_session`
- `cta_click`
- `pdf_download`
- `email_signup`

Event disimpan lokal (maksimum 100 entri) di `localStorage.sopiragen_events` agar dapat diverifikasi di DevTools, tanpa cookie, fingerprinting, atau pengiriman ke pihak ketiga. Integrasi analytics dapat mendengarkan event tersebut tanpa mengubah komponen CTA.

## Deploy

GitHub Pages memakai branch `gh-pages`. Jalankan pemeriksaan dan buat build project-page:

```bash
BASE_PATH=/sopiragen SITE_URL=https://yuliuspratama.github.io npm run build
git add -f dist && git commit -m "Build public release"
git subtree split --prefix dist -b gh-pages-release
git push origin gh-pages-release:gh-pages --force
git branch -D gh-pages-release
```

Setiap push ke `gh-pages` memicu pipeline Pages bawaan GitHub. Status dapat dilihat di **Settings → Pages**. Situs produksi: <https://yuliuspratama.github.io/sopiragen/>.
