import {defineType, defineField, defineArrayMember, ObjectRule} from 'sanity'
import {CustomMarkdownInput} from '../components/MarkdownInputCustomPreview'
import {isUniqueAcrossAllDocuments} from '../lib/isUniqueAcrossAllDocuments'

const workExperience = defineType({
  title: 'Work Experience',
  name: 'workExperience',
  type: 'document',
  orderings: [
    {
      title: 'Start Date',
      name: 'startDateAsc',
      by: [{field: 'dates.startDate', direction: 'asc'}],
    },
    {
      title: 'End Date',
      name: 'endDateDesc',
      by: [{field: 'dates.endDate', direction: 'desc'}],
    },
  ],
  fields: [
    defineField({
      title: 'Sanity Title',
      name: 'sanityTitle',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      title: 'Slug',
      name: 'slug',
      type: 'slug',
      validation: (Rule) => Rule.required(),
      options: {
        source: 'sanityTitle',
        isUnique: isUniqueAcrossAllDocuments,
        slugify: (input) => input.toLowerCase().replace(/\s+/g, '-').slice(0, 200),
      },
    }),
    defineField({
      title: 'Company',
      name: 'company',
      type: 'object',
      validation: (Rule: ObjectRule) => Rule.required(),
      fields: [
        defineField({
          title: 'Company ES',
          name: 'es',
          type: 'string',
          validation: (Rule) => Rule.required(),
        }),
        defineField({
          title: 'Company EN',
          name: 'en',
          type: 'string',
          validation: (Rule) => Rule.required(),
        }),
      ],
    }),
    defineField({
      title: 'Position',
      validation: (Rule: ObjectRule) => Rule.required(),
      name: 'position',
      type: 'object',
      fields: [
        defineField({
          title: 'Position ES',
          name: 'es',
          type: 'string',
          validation: (Rule) => Rule.required(),
        }),
        defineField({
          title: 'Position EN',
          name: 'en',
          type: 'string',
          validation: (Rule) => Rule.required(),
        }),
      ],
    }),
    defineField({
      title: 'Description',
      name: 'description',
      type: 'object',

      validation: (Rule) => Rule.required(),
      fields: [
        defineField({
          title: 'Description ES',
          name: 'es',
          type: 'markdown',
          components: {input: CustomMarkdownInput},
          validation: (Rule) => Rule.required(),
        }),
        defineField({
          title: 'Description EN',
          name: 'en',
          type: 'markdown',
          components: {input: CustomMarkdownInput},
          validation: (Rule) => Rule.required(),
        }),
      ],
    }),
    defineField({
      title: 'Dates',
      name: 'dates',
      type: 'object',
      fields: [
        defineField({
          title: 'Start Date',
          name: 'startDate',
          type: 'date',
          validation: (Rule) => Rule.required(),
        }),
        defineField({
          title: 'Current',
          name: 'isCurrent',
          type: 'boolean',
          initialValue: false,
          validation: (Rule) => Rule.required(),
        }),
        defineField({
          title: 'End Date',
          name: 'endDate',
          type: 'date',
          hidden: ({document}) => document?.dates?.isCurrent,
        }),
      ],
    }),
  ],
})

export default workExperience
