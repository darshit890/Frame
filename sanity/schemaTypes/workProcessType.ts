import { defineField, defineType, defineArrayMember } from 'sanity'
import { CheckmarkIcon } from '@sanity/icons'

export const workProcessType = defineType({
  name: 'workProcess',
  title: 'Work Process Section',
  type: 'document',
  icon: CheckmarkIcon,
  fields: [
    defineField({
      name: 'subheading',
      title: 'Subheading',
      type: 'string',
      initialValue: 'Our Work Process',
    }),
    defineField({
      name: 'heading',
      title: 'Heading',
      type: 'string',
      initialValue: 'Our Working Process',
    }),
    defineField({
      name: 'steps',
      title: 'Process Steps',
      type: 'array',
      of: [
        defineArrayMember({
          name: 'step',
          type: 'object',
          fields: [
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
              name: 'icon',
              title: 'Icon',
              type: 'string',
              options: {
                list: [
                  { title: 'Bulb', value: 'bulb' },
                  { title: 'Puzzle', value: 'puzzle' },
                  { title: 'Document', value: 'document' },
                ],
              },
              initialValue: 'bulb',
            }),
          ],
          preview: {
            select: {
              title: 'title',
              subtitle: 'description',
            },
            prepare({ title, subtitle }) {
              return {
                title: title || 'Step',
                subtitle: subtitle,
              }
            }
          },
        }),
      ],
    }),
  ],
  preview: {
    select: {
      title: 'heading',
    },
    prepare({ title }) {
      return {
        title: title || 'Work Process Section',
      }
    },
  },
})
