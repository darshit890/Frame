import { defineField, defineType, defineArrayMember } from 'sanity'

export const faqType = defineType({
  name: 'faq',
  title: 'FAQ Section',
  type: 'document',
  fields: [
    defineField({
      name: 'subheading',
      title: 'Subheading',
      type: 'string',
      initialValue: 'FAQs',
    }),
    defineField({
      name: 'heading',
      title: 'Heading',
      type: 'string',
      initialValue: 'Questions? Look here.',
    }),
    defineField({
      name: 'faqs',
      title: 'FAQs List',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'object',
          name: 'item',
          fields: [
            defineField({
              name: 'question',
              title: 'Question',
              type: 'string',
            }),
            defineField({
              name: 'answer',
              title: 'Answer',
              type: 'text',
              rows: 3,
            }),
          ]
        })
      ]
    }),
  ],
})
