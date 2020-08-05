[Polkadot JS Common](../README.md) › [Globals](../globals.md) › ["packages/util/src/is/u8a"](_packages_util_src_is_u8a_.md)

# Module: "packages/util/src/is/u8a"

## Index

### Functions

* [isU8a](_packages_util_src_is_u8a_.md#isu8a)

## Functions

###  isU8a

▸ **isU8a**(`value?`: unknown): *value is Uint8Array*

*Defined in [packages/util/src/is/u8a.ts:21](https://github.com/polkadot-js/common/blob/437314e5/packages/util/src/is/u8a.ts#L21)*

**`name`** isU8a

**`summary`** Tests for a `Uint8Array` object instance.

**`description`** 
Checks to see if the input object is an instance of `Uint8Array`.

**`example`** 
<BR>

```javascript
import { isUint8Array } from '@polkadot/util';

console.log('isU8a', isU8a([])); // => false
```

**Parameters:**

Name | Type |
------ | ------ |
`value?` | unknown |

**Returns:** *value is Uint8Array*
