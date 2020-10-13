import createSchema from 'part:@sanity/base/schema-creator'
import schemaTypes from 'all:part:@sanity/base/schema-type'

import header from './types/header'
import seo from './types/seo'
import footer from './types/footer'
import link from './types/link'
import project from './types/project'
import homepage from './types/homepage'

export default createSchema({
  name: 'default',
  types: schemaTypes.concat([
    header,
    footer,
    link,
    seo,
    project,
    homepage,
  ])
})
