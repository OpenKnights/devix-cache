import { TIsObject } from '../types'

export const isObject: TIsObject = (target) =>
  target !== null && typeof target === 'object'

export const isJsonString = (target: string) => {
  try {
    if (target !== null && typeof JSON.parse(target) === 'object') {
      return true
    }
  } catch (e) {
    return false
  }

  return false
}

export enum CacheType {
  Local,
  Session
}
