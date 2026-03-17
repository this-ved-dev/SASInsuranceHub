/**
 * Application configuration.
 * For production, use environment variables (e.g. REACT_APP_SAS_BASE_URL).
 */
export const config = {
  sasBaseUrl: process.env.REACT_APP_SAS_BASE_URL || 'https://pdcesx04069.exnet.sas.com',
}
