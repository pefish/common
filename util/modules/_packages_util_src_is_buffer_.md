[Polkadot JS Common](../README.md) › [Globals](../globals.md) › ["packages/util/src/is/buffer"](_packages_util_src_is_buffer_.md)

# Module: "packages/util/src/is/buffer"

## Index

### Functions

* [isBuffer](_packages_util_src_is_buffer_.md#isbuffer)

## Functions

###  isBuffer

▸ **isBuffer**(`value`: unknown): *value is Buffer*

*Defined in [packages/util/src/is/buffer.ts:21](https://github.com/polkadot-js/common/blob/9d145e72/packages/util/src/is/buffer.ts#L21)*

**`name`** isBuffer

**`summary`** Tests for a `Buffer` object instance.

**`description`** 
Checks to see if the input object is an instance of `Buffer`.

**`example`** 
<BR>

```javascript
import { isBuffer } from '@polkadot/util';

console.log('isBuffer', isBuffer(Buffer.from([]))); // => true
```

**Parameters:**

Name | Type |
------ | ------ |
`value` | unknown |

**Returns:** *value is Buffer*
