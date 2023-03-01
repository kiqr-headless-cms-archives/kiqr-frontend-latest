import ClientOAuth2 from 'client-oauth2'
import { globalConfig } from '~utils/global-config.js'

export const oauth = new ClientOAuth2({
  clientId: 'jK-mpTxKU_qb7Ht7tAn659nJrR9W-1R1anRbgGFfR8c',
  accessTokenUri: `${globalConfig.get('oauthBaseUrl')}/oauth/token`,
  authorizationUri: `${globalConfig.get('oauthBaseUrl')}/oauth/authorize`,
  redirectUri: 'http://127.0.0.1:56560',
  scopes: ['profile', 'projects'],
})

export const authorizationUrl = oauth.code.getUri()
