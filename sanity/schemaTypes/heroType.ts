import { defineField, defineType } from 'sanity'

export const heroType = defineType({
  name: 'hero',
  title: 'Hero Section',
  type: 'document',
  fields: [
    defineField({
      name: 'badgeText',
      title: 'Badge Text',
      type: 'string',
      initialValue: 'Award Wining Digital Agency',
    }),
    defineField({
      name: 'headingLine1',
      title: 'Heading Line 1',
      type: 'string',
      initialValue: 'Where Innovation Meets',
    }),
    defineField({
      name: 'headingLine2',
      title: 'Heading Line 2 (Colored)',
      type: 'string',
      initialValue: 'Digital Excellence',
    }),
    defineField({
      name: 'tags',
      title: 'Tags',
      type: 'array',
      of: [{ type: 'string' }],
      initialValue: [
        'Mobile Application Development',
        'Website Development',
        'UX/UI Design',
        'Graphic Design',
        'Digital Marketing',
      ],
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      initialValue:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    }),
    defineField({
      name: 'statsProjectCount',
      title: 'Stats: Project Count',
      type: 'string',
      initialValue: '850+',
    }),
    defineField({
      name: 'statsProjectLabel',
      title: 'Stats: Project Label',
      type: 'string',
      initialValue: 'Projects Completed',
    }),
    defineField({
      name: 'statsExpCount',
      title: 'Stats: Experience Count',
      type: 'string',
      initialValue: '18+',
    }),
    defineField({
      name: 'statsExpLabel',
      title: 'Stats: Experience Label',
      type: 'string',
      initialValue: 'Years of Experience',
    }),
    defineField({
      name: 'statsCustomerCount',
      title: 'Stats: Customer Count',
      type: 'string',
      initialValue: '500+',
    }),
    defineField({
      name: 'statsCustomerLabel',
      title: 'Stats: Customer Label',
      type: 'string',
      initialValue: 'Happy Customers',
    }),
    defineField({
      name: 'scrollingText',
      title: 'Scrolling Text Items',
      type: 'array',
      of: [{ type: 'string' }],
      initialValue: [
        'Design',
        'Website Design',
        'UX/UI Design',
        'Graphics Design',
        'Digital Marketing',
      ],
    }),
  ],
})
