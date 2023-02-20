type TemporaryContentType = object
type TemporaryRelation = []

export interface KiqrConfig {
  apiVersion: number
  kind: 'project' | 'plugin'
  projectId: string
  contentTypes: Record<string, TemporaryContentType>
  relations: Array<TemporaryRelation>
}
