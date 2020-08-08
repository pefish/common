[Polkadot JS Common](../README.md) › [Globals](../globals.md) › ["packages/util/src/u8a/eq"](_packages_util_src_u8a_eq_.md)

# Module: "packages/util/src/u8a/eq"

## Index

### Functions

* [u8aEq](_packages_util_src_u8a_eq_.md#u8aeq)

## Functions

###  u8aEq

▸ **u8aEq**(`a`: Uint8Array | string, `b`: Uint8Array | string): *boolean*

*Defined in [packages/util/src/u8a/eq.ts:35](https://github.com/polkadot-js/common/blob/038ef42f/packages/util/src/u8a/eq.ts#L35)*

**`name`** u8aEq

**`summary`** Compares two Uint8Arrays.

**`description`** 
For `UInt8Array` (or hex string) input values true if there is a match.

**`example`** 
<BR>

```javascript
import { u8aEq } from '@polkadot/util';

u8aEq(new Uint8Array([0x68, 0x65]), new Uint8Array([0x68, 0x65])); // true
```

**Parameters:**

Name | Type |
------ | ------ |
`a` | Uint8Array &#124; string |
`b` | Uint8Array &#124; string |

**Returns:** *boolean*
