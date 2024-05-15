## 获取 url 中指定参数的值

```js
export function getUrlKey(name: string) {
  return (
    decodeURIComponent(
      (
        (new RegExp('[?|&]' + name + '=' + '([^&;]+?)(&|#|;|$)').exec(location.href) || [
          ,
          ''
        ])[1] as string
      )?.replace(/\+/g, '%20')
    ) || null
  )
}
```

## 本地存储辅助类

```ts
/**
 * 本地存储辅助类
 */
import { StorageType } from "./type";

class MyStorage {
  storage: Storage;
  constructor(type: StorageType) {
    this.storage =
      type === StorageType.local ? window.localStorage : window.sessionStorage;
  }
  set(key: string, value: any) {
    const data = JSON.stringify(value);
    this.storage.setItem(key, data);
  }
  get(key: string) {
    const value = this.storage.getItem(key);
    if (value) {
      try {
        return JSON.parse(value);
      } catch (error) {
        return value;
      }
    }
  }
  deleteItem(key: string) {
    this.storage.removeItem(key);
  }
  clear() {
    this.storage.clear();
  }
}

const LStorage = new MyStorage(StorageType.local);
const SStorage = new MyStorage(StorageType.session);

export { LStorage, SStorage };
```
