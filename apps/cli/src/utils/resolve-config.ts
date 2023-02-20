import { ProjectNotFoundError } from '~errors/project-not-found-error.js'
import type { KiqrConfig } from '~types/kiqr-config.js'
import { findKiqrConfig } from '~utils/find-kiqr-config.js'
import { normalizeConfig } from '~utils/normalize-config.js'

export const resolveConfig = async (): Promise<KiqrConfig> => {
  const configFilePath = findKiqrConfig()

  if (!configFilePath) {
    throw new ProjectNotFoundError()
  }

  const rawConfig = await import(configFilePath)
  return normalizeConfig(rawConfig?.default)
}
