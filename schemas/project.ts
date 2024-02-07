export default {
  name: 'project',
  type: 'document',
  title: 'Project',
  fields: [
    {
      name: 'featured',
      type: 'boolean',
      title: 'Featured',
    },
    {
      name: 'name',
      type: 'string',
      title: 'Name',
    },
    {
      name: 'slug',
      type: 'slug',
      title: 'Slug',
      options: {
        source: 'name',
      },
    },
    {
      name: 'description',
      type: 'text',
      title: 'Description',
    },
    {
      name: 'github',
      type: 'url',
      title: 'GitHub URL',
    },
    {
      name: 'demo',
      type: 'url',
      title: 'Demo URL',
    },
    {
      name: 'mainImage',
      type: 'image',
      title: 'Main Image',
    },
    {
      name: 'techStack',
      type: 'array',
      title: 'Tech Stack',
      of: [{type: 'reference', to: [{type: 'tech'}]}],
    },
    {
      name: 'detail',
      type: 'array',
      title: 'Detail',
      of: [{type: 'block'}],
    },
    {
      name: 'screenshots',
      type: 'array',
      title: 'Screenshots',
      of: [{type: 'image'}],
    },
  ],
}
