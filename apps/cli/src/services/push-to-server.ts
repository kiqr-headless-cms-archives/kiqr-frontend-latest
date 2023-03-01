import type { CreateSchemaOperationRequest } from '@kiqr/core-api'
import { schemasApi } from '~apis/schemas-api.js'
import { resolveConfig } from '~utils/config/resolve-config.js'

export const pushToServer = async () => {
  const config = await resolveConfig()

  const payload: CreateSchemaOperationRequest = {
    projectId: 'whitening',
    createSchemaRequest: {
      commitMessage: 'Generated from CLI',
      contentTypesRaw: config.contentTypes,
    },
  }

  await schemasApi.createSchema(payload).catch(async (error) => {
    const response = await error.response.json()
    console.log('error', response)
  })
}
