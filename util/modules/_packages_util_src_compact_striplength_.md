[Polkadot JS Common](../README.md) › [Globals](../globals.md) › ["packages/util/src/compact/stripLength"](_packages_util_src_compact_striplength_.md)

# Module: "packages/util/src/compact/stripLength"

## Index

### Functions

* [compactStripLength](_packages_util_src_compact_striplength_.md#compactstriplength)

## Functions

###  compactStripLength

▸ **compactStripLength**(`input`: Uint8Array, `bitLength`: [BitLength](_packages_util_src_compact_types_.md#bitlength)): *[number, Uint8Array]*

*Defined in [packages/util/src/compact/stripLength.ts:22](https://github.com/polkadot-js/common/blob/1c6b4bfc/packages/util/src/compact/stripLength.ts#L22)*

**`name`** compactStripLength

**`description`** Removes the length prefix, returning both the total length (including the value + compact encoding) and the decoded value with the correct length

**`example`** 
<BR>

```javascript
import { compactStripLength } from '@polkadot/util';

console.log(compactStripLength(new Uint8Array([2 << 2, 0xde, 0xad]))); // [2, Uint8Array[0xde, 0xad]]
```

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`input` | Uint8Array | - |
`bitLength` | [BitLength](_packages_util_src_compact_types_.md#bitlength) | DEFAULT_BITLENGTH |

**Returns:** *[number, Uint8Array]*
