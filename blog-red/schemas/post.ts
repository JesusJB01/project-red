export default {
    name: 'post',
    type: 'document',
    title: 'Post',
    fields: [
      {
        name: 'bannerImage',
        type: 'image',
        title: 'Banner Image'
      },
      {
        name: 'coverImage',
        type: 'image',
        title: 'Cover Image'
      },
      {
        name: 'title',
        type: 'string',
        title: 'Title'
      },
      {
        name: 'creationDate', // Agregamos un nuevo campo para la fecha de creación
        type: 'datetime',     // Utilizamos el tipo 'datetime' para la fecha y hora
        title: 'Creation Date'
      },
      {
        name: 'overview',
        type: 'string',
        title: 'Overview'
      },
      {
        name: 'slug',
        type: 'slug',
        title: 'Slug',
        options: {
          source: 'title'
        }
      },
      {
        name: 'content',
        type: 'array',
        title: 'Content',
        of: [
          {
            type: 'block'
          },
          {
            type: 'image',
            fields: [
              {
                type: 'text',
                name: 'alt',
                title: 'Alternative Text'
              }
            ]
          }
        ]
      },
      
    ]
  }
  