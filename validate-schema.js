exports.command = 'validate-schema'
exports.desc = 'Validate GraphQL schema'

const graphql = require('graphql')

exports.handler = async (context, argv) => {
  const config = await context.getProjectConfig()
  graphql.buildSchema(config.getSchemaSDL())
}
