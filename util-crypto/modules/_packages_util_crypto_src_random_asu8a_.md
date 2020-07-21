[Polkadot JS Common](../README.md) › [Globals](../globals.md) › ["packages/util-crypto/src/random/asU8a"](_packages_util_crypto_src_random_asu8a_.md)

# Module: "packages/util-crypto/src/random/asU8a"

## Index

### Functions

* [randomAsU8a](_packages_util_crypto_src_random_asu8a_.md#randomasu8a)

## Functions

###  randomAsU8a

▸ **randomAsU8a**(`length`: number): *Uint8Array*

*Defined in [packages/util-crypto/src/random/asU8a.ts:21](https://github.com/polkadot-js/common/blob/1c6b4bfc/packages/util-crypto/src/random/asU8a.ts#L21)*

**`name`** randomAsU8a

**`summary`** Creates a Uint8Array filled with random bytes.

**`description`** 
Returns a `Uint8Array` with the specified (optional) length filled with random bytes.

**`example`** 
<BR>

```javascript
import { randomAsU8a } from '@polkadot/util-crypto';

randomAsU8a(); // => Uint8Array([...])
```

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`length` | number | 32 |

**Returns:** *Uint8Array*
