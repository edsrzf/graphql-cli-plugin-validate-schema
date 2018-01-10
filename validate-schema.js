exports.command = 'validate-schema'
exports.desc = 'Validate GraphQL schema'

import { buildSchema } from 'graphql'

exports.handler = async (context, argv) => {
  const config = await context.getProjectConfig()
  buildSchema(config.getSchemaSDL())
}
