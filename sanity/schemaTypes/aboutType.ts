import { defineField, defineType } from 'sanity'
import { UserIcon } from '@sanity/icons'

export const aboutType = defineType({
  name: 'about',
  title: 'About Section',
  type: 'document',
  icon: UserIcon,
  fields: [
    defineField({
      name: 'heading',
      title: 'Heading',
      type: 'string',
      initialValue: "We're Awards Winning Digital Agency",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      initialValue: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    }),
    defineField({
      name: 'image',
      title: 'Main Image',
      type: 'image',
      options: {
        hotspot: true,
      },
      fields: [
        defineField({
          name: 'alt',
          type: 'string',
          title: 'Alternative text',
        }),
      ],
    }),
    defineField({
      name: 'experienceCount',
      title: 'Experience Count (Years)',
      type: 'string',
      initialValue: '18',
    }),
    defineField({
      name: 'experienceLabel',
      title: 'Experience Label',
      type: 'string',
      initialValue: 'Years of Experience',
      description: 'Use <br/> for line breaks if needed, though simple text is preferred.'
    }),
    defineField({
      name: 'checklist',
      title: 'Checklist Items',
      type: 'array',
      of: [{ type: 'string' }],
      initialValue: [
        'Awards Winning Digital Agency',
        'Experience Team Members',
        'High Quality Services'
      ]
    }),
    defineField({
      name: 'author',
      title: 'Author / Signature Name',
      type: 'string',
      initialValue: 'Jenny Alexander',
    }),
  ],
  preview: {
    select: {
      title: 'heading',
      media: 'image',
    },
    prepare({ title, media }) {
      return {
        title: title || 'About Section',
        media: media,
      }
    },
  },
})
