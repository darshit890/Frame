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
      initialValue: 'The best work happens when we build it together',
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
              title: 'Icon (Optional - for simple view)',
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
            defineField({
                name: 'image',
                title: 'Image (Optional - for expanded view)',
                type: 'image',
                options: { hotspot: true }
            })
          ],
          preview: {
            select: {
              title: 'title',
              subtitle: 'description',
              media: 'image'
            },
            prepare({ title, subtitle, media }) {
              return {
                title: title || 'Step',
                subtitle: subtitle,
                media: media
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
