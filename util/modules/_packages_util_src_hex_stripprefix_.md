[Polkadot JS Common](../README.md) › [Globals](../globals.md) › ["packages/util/src/hex/stripPrefix"](_packages_util_src_hex_stripprefix_.md)

# Module: "packages/util/src/hex/stripPrefix"

## Index

### Functions

* [hexStripPrefix](_packages_util_src_hex_stripprefix_.md#hexstripprefix)

## Functions

###  hexStripPrefix

▸ **hexStripPrefix**(`value?`: string | null): *string*

*Defined in [packages/util/src/hex/stripPrefix.ts:23](https://github.com/polkadot-js/common/blob/64510af8/packages/util/src/hex/stripPrefix.ts#L23)*

**`name`** hexStripPrefix

**`summary`** Strips any leading `0x` prefix.

**`description`** 
Tests for the existence of a `0x` prefix, and returns the value without the prefix. Un-prefixed values are returned as-is.

**`example`** 
<BR>

```javascript
import { hexStripPrefix } from '@polkadot/util';

console.log('stripped', hexStripPrefix('0x1234')); // => 1234
```

**Parameters:**

Name | Type |
------ | ------ |
`value?` | string &#124; null |

**Returns:** *string*
