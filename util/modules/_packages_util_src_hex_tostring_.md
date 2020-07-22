[Polkadot JS Common](../README.md) › [Globals](../globals.md) › ["packages/util/src/hex/toString"](_packages_util_src_hex_tostring_.md)

# Module: "packages/util/src/hex/toString"

## Index

### Functions

* [hexToString](_packages_util_src_hex_tostring_.md#hextostring)

## Functions

###  hexToString

▸ **hexToString**(`_value?`: string | null): *string*

*Defined in [packages/util/src/hex/toString.ts:22](https://github.com/polkadot-js/common/blob/91340577/packages/util/src/hex/toString.ts#L22)*

**`name`** hexToU8a

**`summary`** Creates a Uint8Array object from a hex string.

**`description`** 
Hex input values return the actual bytes value converted to a string. Anything that is not a hex string (including the `0x` prefix) throws an error.

**`example`** 
<BR>

```javascript
import { hexToString } from '@polkadot/util';

hexToU8a('0x68656c6c6f'); // hello
```

**Parameters:**

Name | Type |
------ | ------ |
`_value?` | string &#124; null |

**Returns:** *string*