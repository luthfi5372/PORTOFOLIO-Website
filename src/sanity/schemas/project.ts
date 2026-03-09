export default {
  name: 'project',
  title: 'Project',
  type: 'document',
  fields: [
    { name: 'title', title: 'Judul Proyek', type: 'string' },
    { name: 'slug', title: 'Slug', type: 'slug', options: { source: 'title' } },
    { name: 'category', title: 'Kategori', type: 'string' },
    { name: 'mainImage', title: 'Foto Utama', type: 'image', options: { hotspot: true } },
    { name: 'description', title: 'Deskripsi', type: 'text' },
    { name: 'link', title: 'Link Proyek', type: 'url' },
  ],
}

