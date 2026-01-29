import { defineField, defineType } from 'sanity'

export const servicesHeaderType = defineType({
  name: 'servicesHeader',
  title: 'Services Section Header',
  type: 'document',
  fields: [
    defineField({
      name: 'headingLine1',
      title: 'Heading Line 1',
      type: 'string',
      initialValue: 'OurCompany',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'headingLine2',
      title: 'Heading Line 2',
      type: 'string',
      initialValue: 'Service!',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      initialValue: 'We are a full-service digital agency that builds immersive user experience. Our team creates an exceptional visualization and thought-out functionality.',
      validation: (rule) => rule.required(),
    }),
  ],
})
