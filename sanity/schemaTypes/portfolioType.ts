import { defineField, defineType, defineArrayMember } from 'sanity'

export const portfolioType = defineType({
  name: 'portfolio',
  title: 'Portfolio Section',
  type: 'document',
  fields: [
    defineField({
      name: 'subheading',
      title: 'Subheading',
      type: 'string',
      initialValue: 'Our Projects',
    }),
    defineField({
      name: 'headingLine1',
      title: 'Heading Line 1',
      type: 'string',
      initialValue: 'Our Recent',
    }),
    defineField({
      name: 'headingLine2',
      title: 'Heading Line 2 (Highlighted)',
      type: 'string',
      initialValue: 'Work Portfolio',
    }),
    defineField({
      name: 'viewAllLink',
      title: 'View All Projects Link',
      type: 'string',
      initialValue: '/projects',
    }),
    defineField({
      name: 'projects',
      title: 'Projects List',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'object',
          name: 'project',
          fields: [
            defineField({
              name: 'title',
              title: 'Project Title',
              type: 'string',
            }),
            defineField({
              name: 'slug',
              title: 'Slug',
              type: 'slug',
              options: {
                source: (doc, options) => {
                  // This is a bit tricky for embedded objects. 
                  // We might need a custom source or just let user type it.
                  // For simplicity in embedded objects, standard source often works 
                  // if we access the parent, but here we are in an array.
                  // Let's just use 'title' relative to this object if possible, 
                  // or rely on manual input.
                  // Actually, source: 'projects[index].title' is complex.
                  // Let's keep it simple: source: 'title' (might not work well in array) 
                  // or just standard slug.
                  return (options.parent as any)?.title;
                },
                maxLength: 96,
              },
              validation: Rule => Rule.required(),
            }),
            defineField({
              name: 'client',
              title: 'Client Name',
              type: 'string',
            }),
            defineField({
              name: 'year',
              title: 'Year',
              type: 'string',
            }),
            defineField({
              name: 'tags',
              title: 'Tags (Categories)',
              type: 'array',
              of: [{ type: 'reference', to: { type: 'category' } }],
            }),
            defineField({
              name: 'image',
              title: 'Project Image',
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
            defineField({
              name: 'description',
              title: 'Short Description',
              type: 'text',
              rows: 3,
            }),
            defineField({
              name: 'body',
              title: 'Full Project Details (Block Content)',
              type: 'blockContent',
            }),
            defineField({
              name: 'link',
              title: 'Project Link',
              type: 'url',
            }),
          ]
        })
      ]
    }),
  ],
})
