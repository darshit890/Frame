import { defineField, defineType, defineArrayMember } from 'sanity'

export const servicesPageType = defineType({
  name: 'servicesPage',
  title: 'Services Page',
  type: 'document',
  groups: [
    { name: 'hero', title: 'Hero Section' },
    { name: 'bento', title: 'Bento Grid' },
    { name: 'marquee', title: 'Marquee' },
    { name: 'projects', title: 'Featured Projects' },
  ],
  fields: [
    defineField({
      name: 'subheading',
      title: 'Subheading',
      type: 'string',
      group: 'hero',
      initialValue: 'Created to make you stand out with',
    }),
    defineField({
      name: 'heading',
      title: 'Heading',
      type: 'string',
      group: 'hero',
      initialValue: 'Our Services',
    }),
    // Column 1
    defineField({
      name: 'column1',
      title: 'Column 1 Cards',
      type: 'array',
      group: 'bento',
      of: [
        defineArrayMember({
            type: 'object',
            name: 'serviceCard',
            title: 'Service Card',
            fields: [
                defineField({ name: 'title', type: 'string' }),
                defineField({ name: 'description', type: 'string' }),
                defineField({ name: 'icon', type: 'string', options: { list: ['bulb', 'puzzle', 'document', 'code', 'pen', 'chart'] } }),
            ]
        }),
        defineArrayMember({
            type: 'object',
            name: 'imageCard',
            title: 'Image Card',
            fields: [
                defineField({ name: 'image', type: 'image', options: { hotspot: true } }),
                defineField({ name: 'backgroundColor', type: 'string', title: 'Background Color (Hex)' }),
            ]
        })
      ]
    }),
    // Column 2
    defineField({
        name: 'column2',
        title: 'Column 2 Cards',
        type: 'array',
        group: 'bento',
        of: [
          defineArrayMember({
              type: 'object',
              name: 'serviceCard',
              title: 'Service Card',
              fields: [
                  defineField({ name: 'title', type: 'string' }),
                  defineField({ name: 'description', type: 'string' }),
                  defineField({ name: 'icon', type: 'string', options: { list: ['bulb', 'puzzle', 'document', 'code', 'pen', 'chart'] } }),
              ]
          }),
          defineArrayMember({
              type: 'object',
              name: 'imageCard',
              title: 'Image Card',
              fields: [
                  defineField({ name: 'image', type: 'image', options: { hotspot: true } }),
                  defineField({ name: 'backgroundColor', type: 'string', title: 'Background Color (Hex)' }),
              ]
          })
        ]
      }),
      // Column 3
      defineField({
        name: 'column3',
        title: 'Column 3 Cards',
        type: 'array',
        group: 'bento',
        of: [
          defineArrayMember({
              type: 'object',
              name: 'serviceCard',
              title: 'Service Card',
              fields: [
                  defineField({ name: 'title', type: 'string' }),
                  defineField({ name: 'description', type: 'string' }),
                  defineField({ name: 'icon', type: 'string', options: { list: ['bulb', 'puzzle', 'document', 'code', 'pen', 'chart'] } }),
              ]
          }),
          defineArrayMember({
              type: 'object',
              name: 'imageCard',
              title: 'Image Card',
              fields: [
                  defineField({ name: 'image', type: 'image', options: { hotspot: true } }),
                  defineField({ name: 'backgroundColor', type: 'string', title: 'Background Color (Hex)' }),
              ]
          })
        ]
      }),
    defineField({
      name: 'marqueeItems',
      title: 'Marquee Items',
      type: 'array',
      group: 'marquee',
      of: [{ type: 'string' }],
      initialValue: ['CREATIVE', 'STUDIO', 'CREATIVE', 'STUDIO', 'CREATIVE', 'STUDIO']
    }),
    defineField({
        name: 'featuredProjects',
        title: 'Featured Projects',
        type: 'array',
        group: 'projects',
        of: [
            defineArrayMember({
                type: 'object',
                fields: [
                    defineField({ name: 'title', type: 'string' }),
                    defineField({ name: 'category', type: 'string' }),
                    defineField({ name: 'image', type: 'image', options: { hotspot: true } }),
                    defineField({ name: 'backgroundColor', type: 'string', title: 'Background Color (Hex)' }),
                ]
            })
        ]
    })
  ],
  preview: {
    select: {
      title: 'heading',
    },
    prepare({ title }) {
      return {
        title: title || 'Services Page',
      }
    },
  },
})
