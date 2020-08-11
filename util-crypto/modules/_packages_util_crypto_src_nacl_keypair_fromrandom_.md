[Polkadot JS Common](../README.md) › [Globals](../globals.md) › ["packages/util-crypto/src/nacl/keypair/fromRandom"](_packages_util_crypto_src_nacl_keypair_fromrandom_.md)

# Module: "packages/util-crypto/src/nacl/keypair/fromRandom"

## Index

### Functions

* [naclKeypairFromRandom](_packages_util_crypto_src_nacl_keypair_fromrandom_.md#naclkeypairfromrandom)

## Functions

###  naclKeypairFromRandom

▸ **naclKeypairFromRandom**(): *[Keypair](../interfaces/_packages_util_crypto_src_types_.keypair.md)*

*Defined in [packages/util-crypto/src/nacl/keypair/fromRandom.ts:23](https://github.com/polkadot-js/common/blob/f5acd602/packages/util-crypto/src/nacl/keypair/fromRandom.ts#L23)*

**`name`** naclKeypairFromRandom

**`summary`** Creates a new public/secret keypair.

**`description`** 
Returns a new generate object containing a `publicKey` & `secretKey`.

**`example`** 
<BR>

```javascript
import { naclKeypairFromRandom } from '@polkadot/util-crypto';

naclKeypairFromRandom(); // => { secretKey: [...], publicKey: [...] }
```

**Returns:** *[Keypair](../interfaces/_packages_util_crypto_src_types_.keypair.md)*
