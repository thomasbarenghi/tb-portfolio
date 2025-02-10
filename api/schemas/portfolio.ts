import {defineType, defineField, defineArrayMember, ObjectRule} from 'sanity'
import {CustomMarkdownInput} from '../components/MarkdownInputCustomPreview'
import {isUniqueAcrossAllDocuments} from '../lib/isUniqueAcrossAllDocuments'

const someDocumentType = defineType({
  title: 'Portfolio',
  name: 'portfolio',
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
      title: 'Multimedia',
      name: 'multimedia',
      type: 'object',
      fields: [
        defineField({
          title: 'Cover Image',
          name: 'coverImage',
          type: 'image',
          validation: (Rule: ObjectRule) => Rule.required(),
        }),
        defineField({
          title: 'Main Image',
          name: 'mainImage',
          type: 'image',
          validation: (Rule: ObjectRule) => Rule.required(),
        }),
        defineField({
          title: 'Gallery',
          name: 'gallery',
          type: 'array',
          of: [
            defineArrayMember({
              type: 'image',
            }),
          ],
        }),
      ],
    }),
    defineField({
      title: 'Title',
      name: 'title',
      type: 'object',
      validation: (Rule: ObjectRule) => Rule.required(),
      fields: [
        defineField({
          title: 'Title ES',
          name: 'es',
          type: 'string',
          validation: (Rule) => Rule.required(),
        }),
        defineField({
          title: 'Title EN',
          name: 'en',
          type: 'string',
          validation: (Rule) => Rule.required(),
        }),
      ],
    }),
    defineField({
      title: 'Short Description',
      validation: (Rule: ObjectRule) => Rule.required(),
      name: 'description',
      type: 'object',
      fields: [
        defineField({
          title: 'Short Description ES',
          name: 'es',
          type: 'string',
          validation: (Rule) => Rule.required(),
        }),
        defineField({
          title: 'Short Description EN',
          name: 'en',
          type: 'string',
          validation: (Rule) => Rule.required(),
        }),
      ],
    }),
    defineField({
      title: 'Featured',
      name: 'featured',
      type: 'boolean',
      validation: (Rule: ObjectRule) => Rule.required(),
    }),
    defineField({
      title: 'Completion Date',
      name: 'completionDate',
      type: 'date',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      title: 'Links',
      name: 'links',
      type: 'object',
      fields: [
        defineField({
          title: 'Deploy',
          name: 'deployLink',
          type: 'url',
        }),
        defineField({
          title: 'GitHub',
          name: 'githubLink',
          type: 'url',
        }),
      ],
    }),
    defineField({
      title: 'Is just design',
      name: 'justDesign',
      type: 'boolean',
      validation: (Rule: ObjectRule) => Rule.required(),
    }),
    defineField({
      title: 'Technologies',
      name: 'technologies',
      type: 'object',
      fields: [
        defineField({
          title: 'Frontend Technologies',
          name: 'frontTecnologies',
          type: 'string',
        }),
        defineField({
          title: 'Backend Technologies',
          name: 'backTecnologies',
          type: 'string',
        }),
        defineField({
          title: 'Database Technologies',
          name: 'databaseTecnologies',
          type: 'string',
        }),
      ],
    }),
    defineField({
      title: 'Content',
      name: 'content',
      type: 'object',

      validation: (Rule) => Rule.required(),
      fields: [
        defineField({
          title: 'Content ES',
          name: 'es',
          type: 'markdown',
          components: {input: CustomMarkdownInput},
          validation: (Rule) => Rule.required(),
        }),
        defineField({
          title: 'Content EN',
          name: 'en',
          type: 'markdown',
          components: {input: CustomMarkdownInput},
          validation: (Rule) => Rule.required(),
        }),
      ],
    }),
  ],
})

export default someDocumentType
