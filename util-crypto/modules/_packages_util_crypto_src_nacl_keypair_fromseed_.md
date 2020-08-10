[Polkadot JS Common](../README.md) › [Globals](../globals.md) › ["packages/util-crypto/src/nacl/keypair/fromSeed"](_packages_util_crypto_src_nacl_keypair_fromseed_.md)

# Module: "packages/util-crypto/src/nacl/keypair/fromSeed"

## Index

### Functions

* [naclKeypairFromSeed](_packages_util_crypto_src_nacl_keypair_fromseed_.md#naclkeypairfromseed)

## Functions

###  naclKeypairFromSeed

▸ **naclKeypairFromSeed**(`seed`: Uint8Array): *[Keypair](../interfaces/_packages_util_crypto_src_types_.keypair.md)*

*Defined in [packages/util-crypto/src/nacl/keypair/fromSeed.ts:24](https://github.com/polkadot-js/common/blob/64510af8/packages/util-crypto/src/nacl/keypair/fromSeed.ts#L24)*

**`name`** naclKeypairFromSeed

**`summary`** Creates a new public/secret keypair from a seed.

**`description`** 
Returns a object containing a `publicKey` & `secretKey` generated from the supplied seed.

**`example`** 
<BR>

```javascript
import { naclKeypairFromSeed } from '@polkadot/util-crypto';

naclKeypairFromSeed(...); // => { secretKey: [...], publicKey: [...] }
```

**Parameters:**

Name | Type |
------ | ------ |
`seed` | Uint8Array |

**Returns:** *[Keypair](../interfaces/_packages_util_crypto_src_types_.keypair.md)*
