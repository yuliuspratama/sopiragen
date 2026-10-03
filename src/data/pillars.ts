export const pillars = [
  {
    slug: 'eksperimen-7-hari',
    number: '01',
    title: 'Eksperimen 7 Hari',
    short: 'Eksperimen',
    description: 'Tantangan delegasi terserial: satu tugas nyata setiap hari, dicatat, lalu dievaluasi.',
    promise: 'Mulai kecil. Ukur hasil. Naikkan tingkat.'
  },
  {
    slug: 'playbook-sop-ai',
    number: '02',
    title: 'Playbook SOP AI',
    short: 'Playbook',
    description: 'Template dan SOP siap pakai untuk memberi peran, konteks, langkah, dan standar hasil kepada AI.',
    promise: 'Dari prompt sekali pakai menjadi sistem berulang.'
  },
  {
    slug: 'kantor-manusia',
    number: '03',
    title: 'Kantor Manusia',
    short: 'Kantor Manusia',
    description: 'Catatan tentang peran manusia saat AI menjadi tim: keputusan, tanggung jawab, dan batas kerja.',
    promise: 'Manusia tetap memegang kemudi.'
  },
  {
    slug: 'studio-log',
    number: '04',
    title: 'Studio Log',
    short: 'Studio Log',
    description: 'Catatan pembangunan SopirAgen secara terbuka—apa yang berhasil, gagal, dan diperbaiki.',
    promise: 'Belajar dari proses, bukan hanya hasil.'
  }
] as const;

export type Pillar = (typeof pillars)[number];
