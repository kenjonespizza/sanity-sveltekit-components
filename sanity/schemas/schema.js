
import createSchema from 'part:@sanity/base/schema-creator'
import schemaTypes from 'all:part:@sanity/base/schema-type'
import page from './documents/page'
import hero from './objects/hero'
import cta from './objects/cta'

export default createSchema({
  name: 'blog',
  types: schemaTypes.concat([
    page,
    hero,
    cta,
  ])
})
