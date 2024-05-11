# devix-cache

> devix-cache is a JavaScript library for managing storage（ 简体中文 | [English](README.md) ）

## 安装

请确保您在 Node.js 环境下使用 npm 或其他包管理器安装此库。

```shell
npm install --save devix-cache
```

然后，利用现代的模块捆绑工具，如 Vite 或 Webpack，以模块化的语法引入此库。

```javascript
// 使用 ES Module
import { [[ModuleName]] } from 'devix-cache'

// 使用 CommonJS
const { [[ModuleName]]  } = require('devix-cache')
```

## 使用

```javascript
import { localCache } from 'devix-cache'

const KING_INFO_VALUE = {
  name: 'King-3',
  age: 18
}
const KING_INFO_KEY = 'KING_INFO'

// 使用 localCache 设置缓存
localCache.setCache('token', 'coder-king-3')
localCache.setCache(KING_INFO_KEY, KING_INFO_VALUE)
let kingInfo: typeof KING_INFO_VALUE = localCache.getCache(KING_INFO_KEY)
console.log(`kingInfo:`, kingInfo)

// 修改对象类型缓存中的值
localCache.updateCache(KING_INFO_KEY, 'age', 20)
kingInfo = localCache.getCache(KING_INFO_KEY)
console.log(kingInfo.age)

// 删除 `KING_INFO_KEY` 作为 key 的缓存
localCache.deleteCache(KING_INFO_KEY)
const isKingInfo = localCache.hasCache(KING_INFO_KEY)
console.log(`isKingInfo:`, isKingInfo)

// 清除所有缓存
localCache.clearCache()
const isClearCache =
  !localCache.hasCache(KING_INFO_KEY) && !localCache.hasCache('token')
console.log(`isClearCache:`, isClearCache)
```

## 方法

### StorageCache

StorageCache 类实例化并导出了两个缓存实例对象 `localCache` 和 `sessionCache`。

```typescript
declare enum CacheType {
  Local = 0,
  Session = 1
}

/** 基于 Storage API 实现的 StorageCache 类 */
declare class StorageCache {
  private storage
  /**
   * 创建一个 StorageCache 实例。
   *
   * @param {CacheType} type
   * @memberof StorageCache
   */
  constructor(type: CacheType)
  /**
   * 根据提供的 key 获取缓存数据
   *
   * @param {string} key
   * @return {*}
   */
  getCache(key: string): any
  /**
   * 根据提供的 key 和 value 设置缓存数据
   *
   * @param {string} key
   * @param {any} value
   */
  setCache(key: string, value: any): void
  /**
   * 根据提供的 key、属性和值更新缓存对象
   *
   * @param {string} key
   * @param {string} property
   * @param {any} value
   */
  updateCache(key: string, property: string, value: any): void
  /**
   * 根据提供的 key 删除缓存数据
   *
   * @param {string} key
   */
  deleteCache(key: string): void
  /**
   * 根据提供的 key 检查缓存数据是否存在
   *
   * @param {string} key
   * @return {*}  {boolean}
   */
  hasCache(key: string): boolean
  /**
   * 清除所有缓存数据
   */
  clearCache(): void
}
declare const localCache: StorageCache
declare const sessionCache: StorageCache
```

**localCache**

如果不手动清除，缓存数据将永久保存

**sessionCache**

当会话窗口关闭时，缓存数据将自动清除
