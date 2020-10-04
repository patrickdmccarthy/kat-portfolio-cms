import createSchema from 'part:@sanity/base/schema-creator'
import schemaTypes from 'all:part:@sanity/base/schema-type'

import header from './types/header'
import seo from './types/seo'
import footer from './types/seo'
import project from './types/seo'
import homepage from './types/seo'

export default createSchema({
  name: 'default',
  types: schemaTypes.concat([
    seo,
  ])
})
