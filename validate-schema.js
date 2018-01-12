exports.command = 'validate-schema'
exports.desc = 'Validate GraphQL schema'

const chalk = require('chalk')
const graphql = require('graphql')

exports.handler = async (context, argv) => {
  const config = await context.getProjectConfig()
  try {
    graphql.buildSchema(config.getSchemaSDL())
  } catch (error) {
    console.log(chalk.red(error.toString()))
  }
}
