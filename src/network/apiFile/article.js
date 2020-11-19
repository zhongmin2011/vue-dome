import { get, post } from '../http'

export function apiAddress (url, params) {
  return post(url, params)
}
export function getProcinst (url, params) {
  return get(url, params)
}