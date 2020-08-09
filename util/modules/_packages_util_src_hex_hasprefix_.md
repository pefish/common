[Polkadot JS Common](../README.md) › [Globals](../globals.md) › ["packages/util/src/hex/hasPrefix"](_packages_util_src_hex_hasprefix_.md)

# Module: "packages/util/src/hex/hasPrefix"

## Index

### Functions

* [hexHasPrefix](_packages_util_src_hex_hasprefix_.md#hexhasprefix)

## Functions

###  hexHasPrefix

▸ **hexHasPrefix**(`value?`: string | null): *boolean*

*Defined in [packages/util/src/hex/hasPrefix.ts:21](https://github.com/polkadot-js/common/blob/c5fe5cd8/packages/util/src/hex/hasPrefix.ts#L21)*

**`name`** hexHasPrefix

**`summary`** Tests for the existence of a `0x` prefix.

**`description`** 
Checks for a valid hex input value and if the start matched `0x`

**`example`** 
<BR>

```javascript
import { hexHasPrefix } from '@polkadot/util';

console.log('has prefix', hexHasPrefix('0x1234')); // => true
```

**Parameters:**

Name | Type |
------ | ------ |
`value?` | string &#124; null |

**Returns:** *boolean*
