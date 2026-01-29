import { defineField, defineType } from 'sanity'

export const testimonialsType = defineType({
  name: 'testimonials',
  title: 'Testimonials Section',
  type: 'document',
  fields: [
    defineField({
      name: 'subheading',
      title: 'Subheading',
      type: 'string',
      initialValue: 'Clients Testimonials',
    }),
    defineField({
      name: 'heading',
      title: 'Heading',
      type: 'string',
      initialValue: 'Testimonials that Speaks to My Results',
    }),
    defineField({
      name: 'testimonials',
      title: 'Testimonials List',
      type: 'array',
      of: [
        defineField({
          type: 'object',
          name: 'testimonial',
          fields: [
            defineField({
              name: 'name',
              title: 'Name',
              type: 'string',
            }),
            defineField({
              name: 'role',
              title: 'Role',
              type: 'string',
            }),
            defineField({
              name: 'rating',
              title: 'Rating',
              type: 'number',
              initialValue: 5.0,
              validation: Rule => Rule.min(0).max(5).precision(1),
            }),
            defineField({
              name: 'text',
              title: 'Review Text',
              type: 'text',
            }),
            defineField({
              name: 'image',
              title: 'Client Image',
              type: 'image',
              options: {
                hotspot: true,
              },
              fields: [
                {
                  name: 'alt',
                  type: 'string',
                  title: 'Alternative text',
                }
              ]
            }),
          ]
        })
      ]
    }),
  ],
})
