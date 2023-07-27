export default {
  name: 'portfolio',
  type: 'document',
  title: 'Portfolio',
  fields: [
    {
      name: 'coverImage',
      type: 'image',
      title: 'Cover Image',
    },
    {
      name: 'mainImage',
      type: 'image',
      title: 'Main Image',
    },
    {
      name: 'gallery',
      type: 'array',
      title: 'Gallery',
      of: [
        {
          type: 'image',
        },
      ],
    },
    {
      name: 'title',
      type: 'string',
      title: 'Title',
    },
    {
      name: 'frontTecnologies',
      type: 'string',
      title: 'Frontend Technologies',
    },
    {
      name: 'backTecnologies',
      type: 'string',
      title: 'Backend Technologies',
    },
    {
      name: 'databaseTecnologies',
      type: 'string',
      title: 'Database Technologies',
    },
    {
      name: 'completionDate',
      type: 'date',
      title: 'Completion Date',
    },
    {
      name: 'description',
      type: 'text',
      title: 'Description',
    },
    {
      name: 'deployLink',
      type: 'url',
      title: 'Deploy Link',
    },
    {
      name: 'githubLink',
      type: 'url',
      title: 'GitHub Link',
    },
    {
      name: 'technologiesUsed',
      type: 'array',
      title: 'Technologies Used',
      of: [
        {
          type: 'string',
        },
      ],
    },
    {
      name: 'featured',
      type: 'boolean',
      title: 'Featured',
      description: 'Is this project featured?',
    },
    // {
    //   name: 'content',
    //   type: 'array',
    //   title: 'Content',
    //   of: [
    //     {
    //       type: 'block'
    //     }
    //   ]
    // }
    {
      name: 'content',
      type: 'array',
      title: 'Content',
      of: [
        {
          type: 'block',
          // Agrega estas opciones para permitir que los bloques de contenido puedan incluir imágenes
          marks: {
            annotations: [
              {
                name: 'image',
                type: 'image',
                title: 'Image',
                options: {
                  hotspot: true, // Esta opción permite que se recorten las imágenes al tamaño deseado
                },
              },
            ],
          },
        },
        {
          type: 'image',
        },
      ],
    },
  ],
}
