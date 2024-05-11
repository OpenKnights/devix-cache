import { TIsObject } from '../types'

export const isObject: TIsObject = (target) =>
  target !== null && typeof target === 'object'

export enum CacheType {
  Local,
  Session
}
