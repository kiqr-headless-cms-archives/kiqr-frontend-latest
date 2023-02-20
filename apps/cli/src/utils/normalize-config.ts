import type { KiqrConfig } from '~types/kiqr-config.js'
import { validateConfig } from './validate-config.js'

export const normalizeConfig = (config: KiqrConfig) => {
  config.apiVersion ||= 1
  config.kind ||= 'project'
  config.contentTypes ||= {}
  config.relations ||= []

  config = validateConfig(config)

  return config as KiqrConfig
}
