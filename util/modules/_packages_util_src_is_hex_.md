[Polkadot JS Common](../README.md) › [Globals](../globals.md) › ["packages/util/src/is/hex"](_packages_util_src_is_hex_.md)

# Module: "packages/util/src/is/hex"

## Index

### Functions

* [isHex](_packages_util_src_is_hex_.md#ishex)

## Functions

###  isHex

▸ **isHex**(`value`: unknown, `bitLength`: number, `ignoreLength`: boolean): *value is string | String*

*Defined in [packages/util/src/is/hex.ts:25](https://github.com/polkadot-js/common/blob/88ecda70/packages/util/src/is/hex.ts#L25)*

**`name`** isHex

**`summary`** Tests for a hex string.

**`description`** 
Checks to see if the input value is a `0x` prefixed hex string. Optionally (`bitLength` !== -1) checks to see if the bitLength is correct.

**`example`** 
<BR>

```javascript
import { isHex } from '@polkadot/util';

isHex('0x1234'); // => true
isHex('0x1234', 8); // => false
```

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`value` | unknown | - |
`bitLength` | number | -1 |
`ignoreLength` | boolean | false |

**Returns:** *value is string | String*
