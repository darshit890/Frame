import { defineField, defineType, defineArrayMember } from 'sanity'

export const achievementsType = defineType({
  name: 'achievements',
  title: 'Achievements Section',
  type: 'document',
  fields: [
    defineField({
      name: 'subheading',
      title: 'Subheading',
      type: 'string',
      initialValue: 'Milestones',
    }),
    defineField({
      name: 'heading',
      title: 'Heading',
      type: 'string',
      initialValue: 'Our Journey to Digital Excellence',
    }),
    defineField({
      name: 'achievements',
      title: 'Achievements List',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'object',
          name: 'achievement',
          fields: [
            defineField({
              name: 'year',
              title: 'Year',
              type: 'string',
            }),
            defineField({
              name: 'title',
              title: 'Title',
              type: 'string',
            }),
            defineField({
              name: 'description',
              title: 'Description',
              type: 'text',
              rows: 3,
            }),
            defineField({
              name: 'stats',
              title: 'Stats Value',
              type: 'string',
            }),
            defineField({
              name: 'statsLabel',
              title: 'Stats Label',
              type: 'string',
            }),
          ]
        })
      ]
    }),
  ],
})
