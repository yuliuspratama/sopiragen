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

Tidak ada cookie, fingerprinting, atau pengiriman ke pihak ketiga. Integrasi analytics dapat mendengarkan event tersebut tanpa mengubah komponen CTA.

## Deploy

Workflow `.github/workflows/deploy.yml` membangun dan menerbitkan ke GitHub Pages setiap push ke `main`. Untuk repository project page, workflow memasang `SITE_URL=https://OWNER.github.io` dan `BASE_PATH=/REPOSITORY`.

Di GitHub buka **Settings → Pages → Build and deployment → Source: GitHub Actions**, lalu push ke `main`. URL publik berbentuk `https://OWNER.github.io/REPOSITORY/`.
