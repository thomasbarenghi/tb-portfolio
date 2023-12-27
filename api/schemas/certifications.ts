import {defineType, defineField, ObjectRule} from 'sanity'
import {isUniqueAcrossAllDocuments} from '../lib/isUniqueAcrossAllDocuments'

const workExperience = defineType({
  title: 'Certifications',
  name: 'certifications',
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
      title: 'Emition Date',
      name: 'emitionDate',
      type: 'date',
      validation: (Rule) => Rule.required(),
    }),
  ],
})

export default workExperience
