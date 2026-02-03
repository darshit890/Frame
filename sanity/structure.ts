import type {StructureResolver} from 'sanity/structure'

// https://www.sanity.io/docs/structure-builder-cheat-sheet
export const structure: StructureResolver = (S) =>
  S.list()
    .title('Website Content')
    .items([
      // --- Home Page Group ---
      S.listItem()
        .title('Home Page')
        .child(
          S.list()
            .title('Home Page Sections')
            .items([
              S.documentTypeListItem('hero').title('Hero Section'),
              S.documentTypeListItem('about').title('About Section'),
              S.documentTypeListItem('achievements').title('Achievements'),
              S.documentTypeListItem('portfolio').title('Portfolio'),
              S.documentTypeListItem('testimonials').title('Testimonials'),
              S.documentTypeListItem('faq').title('FAQ'),
            ])
        ),

      S.divider(),

      // --- Services Page Group ---
      S.listItem()
        .title('Services Page')
        .child(
          S.list()
            .title('Services Page Content')
            .items([
              S.documentTypeListItem('servicesPage').title('Page Layout & Content'),
              S.documentTypeListItem('workProcess').title('Work Process'),
              S.documentTypeListItem('service').title('Services List'),
              // Keeping legacy header if needed, or move to bottom
              S.documentTypeListItem('servicesHeader').title('Services Header (Legacy)'),
            ])
        ),

      S.divider(),

      // --- Blog Page Group ---
      S.listItem()
        .title('Blog Page')
        .child(
          S.list()
            .title('Blog Management')
            .items([
              S.documentTypeListItem('post').title('Posts'),
              S.documentTypeListItem('category').title('Categories'),
            ])
        ),

      S.divider(),

      // --- Catch-all for other schemas ---
      ...S.documentTypeListItems().filter(
        (item) => item.getId() && ![
          // Home
          'hero', 'about', 'achievements', 'portfolio', 'testimonials', 'faq',
          // Services
          'servicesPage', 'workProcess', 'service', 'servicesHeader',
          // Blog
          'post', 'category'
        ].includes(item.getId()!),
      ),
    ])
