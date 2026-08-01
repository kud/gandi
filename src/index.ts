export {
  listDomains,
  getDomain,
  checkDomain,
  renewDomain,
  setAutorenew,
  listRedirects,
  toRedirectHost,
  addRedirect,
  updateRedirect,
  deleteRedirect,
  listDnsRecords,
  setDnsRecord,
  getDnsRecord,
  addDnsValue,
  deleteDnsRecord,
  exportZone,
  getTokenInfo,
} from "./api.js"

export { getApiKey } from "./config.js"

export { authError, authErrorKind } from "./errors.js"
export type { AuthErrorKind } from "./errors.js"

export type {
  Domain,
  DomainCheck,
  DnsRecord,
  WebRedir,
  RedirectPatch,
  GandiError,
  TokenInfo,
} from "./types.js"

export { gandiAPI } from "./client.js"
export type { GandiAPI } from "./client.js"
