# devix-cache

> devix-cache is a JavaScript library for managing storage.（ English | [简体中文](README_zh.md) ）

## Install

Please make sure you install this library using npm or another package manager in a Node.js environment.

```shell
npm install --save devix-cache
```

Then, utilize modern module bundling tools such as Vite or Webpack to import this library using modular syntax.

```javascript
// Using ES Module
import { [[ModuleName]] } from 'devix-cache'

// Using CommonJS
const { [[ModuleName]]  } = require('devix-cache')
```

## Usage

```javascript
import { localCache } from 'devix-cache'

const KING_INFO_VALUE = {
  name: 'King-3',
  age: 18
}
const KING_INFO_KEY = 'KING_INFO'

// Set up cache using localCache
localCache.setCache('token', 'coder-king-3')
localCache.setCache(KING_INFO_KEY, KING_INFO_VALUE)
let kingInfo: typeof KING_INFO_VALUE = localCache.getCache(KING_INFO_KEY)
console.log(`kingInfo:`, kingInfo)

// Change a value in the object type cache
localCache.updateCache(KING_INFO_KEY, 'age', 20)
kingInfo = localCache.getCache(KING_INFO_KEY)
console.log(kingInfo.age)

// Delete the cache whose key is `KING_INFO_KEY`
localCache.deleteCache(KING_INFO_KEY)
const isKingInfo = localCache.hasCache(KING_INFO_KEY)
console.log(`isKingInfo:`, isKingInfo)

// Clear all caches
localCache.clearCache()
const isClearCache =
  !localCache.hasCache(KING_INFO_KEY) && !localCache.hasCache('token')
console.log(`isClearCache:`, isClearCache)
```

## API

### StorageCache

The StorageCache class instantiates and exports two cache instance objects, `localCache` and `sessionCache`.

```typescript
declare enum CacheType {
  Local = 0,
  Session = 1
}

/** StorageCache Class Implemented Based on the Storage API */
declare class StorageCache {
  private storage
  /**
   * Creates an instance of StorageCache.
   *
   * @param {CacheType} type
   * @memberof StorageCache
   */
  constructor(type: CacheType)
  /**
   * Retrieve the cached data based on the provided key
   *
   * @param {string} key
   * @return {*}
   */
  getCache(key: string): any
  /**
   * Set the cached data based on the provided key and value
   *
   * @param {string} key
   * @param {any} value
   */
  setCache(key: string, value: any): void
  /**
   * Update the cached object based on the provided key, property, and value
   *
   * @param {string} key
   * @param {string} property
   * @param {any} value
   */
  updateCache(key: string, property: string, value: any): void
  /**
   * Delete the cached data based on the provided key
   *
   * @param {string} key
   */
  deleteCache(key: string): void
  /**
   * Check if the cached data exists based on the provided key
   *
   * @param {string} key
   * @return {*}  {boolean}
   */
  hasCache(key: string): boolean
  /**
   * Clear all cached data
   */
  clearCache(): void
}
declare const localCache: StorageCache
declare const sessionCache: StorageCache
```

**localCache**

If not manually cleared, the cached data will be stored permanently

**sessionCache**

The cached data will be automatically cleared when the session window is closed
