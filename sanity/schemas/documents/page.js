export default {
  name: "page",
  type: "document",
  title: "Pages",
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: "name"
      }
    },
    {
      name: 'modules',
      title: 'Modules',
      type: 'array',
      of: [
        {type: "hero"},
        {type: "cta"}
      ]
    },
  ]
}