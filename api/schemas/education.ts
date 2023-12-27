import {defineType, defineField, ObjectRule} from 'sanity'
import {CustomMarkdownInput} from '../components/MarkdownInputCustomPreview'
import {isUniqueAcrossAllDocuments} from '../lib/isUniqueAcrossAllDocuments'

const workExperience = defineType({
  title: 'Education',
  name: 'education',
  type: 'document',
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
      title: 'Institution',
      name: 'institution',
      type: 'object',
      validation: (Rule: ObjectRule) => Rule.required(),
      fields: [
        defineField({
          title: 'Institution ES',
          name: 'es',
          type: 'string',
          validation: (Rule) => Rule.required(),
        }),
        defineField({
          title: 'Institution EN',
          name: 'en',
          type: 'string',
          validation: (Rule) => Rule.required(),
        }),
      ],
    }),
    defineField({
      title: 'Degree',
      validation: (Rule: ObjectRule) => Rule.required(),
      name: 'degree',
      type: 'object',
      fields: [
        defineField({
          title: 'Degree ES',
          name: 'es',
          type: 'string',
          validation: (Rule) => Rule.required(),
        }),
        defineField({
          title: 'Degree EN',
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
