import { localCache } from '../src/storage'

const KING_INFO_VALUE = {
  name: 'King-3',
  age: 18
}
const KING_INFO_KEY = 'KING_INFO'

test('test storage', () => {
  // 获取未设置的缓存
  const isKinginfoUndefined = !localCache.getCache(KING_INFO_KEY)
  expect(isKinginfoUndefined).toBe(true)

  // 设置缓存
  localCache.setCache('token', 'coder-king-3')
  localCache.setCache(KING_INFO_KEY, KING_INFO_VALUE)
  let kingInfo: typeof KING_INFO_VALUE = localCache.getCache(KING_INFO_KEY)
  expect(!!kingInfo).toBe(true)

  // 是否更改成功
  localCache.updateCache(KING_INFO_KEY, 'age', 20)
  kingInfo = localCache.getCache(KING_INFO_KEY)

  expect(kingInfo.age).toEqual(20)

  // 判断删除后是否还存在
  localCache.deleteCache(KING_INFO_KEY)
  const isKingInfo = localCache.hasCache(KING_INFO_KEY)
  expect(isKingInfo).toBe(false)

  localCache.clearCache()
  const isClearCache =
    !localCache.hasCache(KING_INFO_KEY) && !localCache.hasCache('token')
  expect(isClearCache).toBe(true)
})
