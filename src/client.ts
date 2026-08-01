import {
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
  exportZone,
  getDnsRecord,
  addDnsValue,
  deleteDnsRecord,
  getTokenInfo,
} from "./api.js"

// The request layer is function-per-export (no shared client state beyond the
// apiKey passed to each call), so GandiAPI wraps those functions as an object
// shape rather than promoting them to a class. This is what makes the surface
// injectable: a consumer can type a prop as `api?: GandiAPI` and hand tests a
// `{ listDomains: vi.fn(), ... }` façade, exactly like PCloudAPI in @kud/pcloud.
export interface GandiAPI {
  listDomains: typeof listDomains
  getDomain: typeof getDomain
  checkDomain: typeof checkDomain
  renewDomain: typeof renewDomain
  setAutorenew: typeof setAutorenew
  listRedirects: typeof listRedirects
  toRedirectHost: typeof toRedirectHost
  addRedirect: typeof addRedirect
  updateRedirect: typeof updateRedirect
  deleteRedirect: typeof deleteRedirect
  listDnsRecords: typeof listDnsRecords
  setDnsRecord: typeof setDnsRecord
  exportZone: typeof exportZone
  getDnsRecord: typeof getDnsRecord
  addDnsValue: typeof addDnsValue
  deleteDnsRecord: typeof deleteDnsRecord
  getTokenInfo: typeof getTokenInfo
}

export const gandiAPI: GandiAPI = {
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
  exportZone,
  getDnsRecord,
  addDnsValue,
  deleteDnsRecord,
  getTokenInfo,
}
