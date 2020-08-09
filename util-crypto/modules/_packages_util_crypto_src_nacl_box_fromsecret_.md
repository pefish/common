[Polkadot JS Common](../README.md) › [Globals](../globals.md) › ["packages/util-crypto/src/nacl/box/fromSecret"](_packages_util_crypto_src_nacl_box_fromsecret_.md)

# Module: "packages/util-crypto/src/nacl/box/fromSecret"

## Index

### Functions

* [naclBoxKeypairFromSecret](_packages_util_crypto_src_nacl_box_fromsecret_.md#naclboxkeypairfromsecret)

## Functions

###  naclBoxKeypairFromSecret

▸ **naclBoxKeypairFromSecret**(`secret`: Uint8Array): *[Keypair](../interfaces/_packages_util_crypto_src_types_.keypair.md)*

*Defined in [packages/util-crypto/src/nacl/box/fromSecret.ts:23](https://github.com/polkadot-js/common/blob/0d03eac3/packages/util-crypto/src/nacl/box/fromSecret.ts#L23)*

**`name`** naclBoxKeypairFromSecret

**`summary`** Creates a new public/secret box keypair from a secret.

**`description`** 
Returns a object containing a box `publicKey` & `secretKey` generated from the supplied secret.

**`example`** 
<BR>

```javascript
import { naclBoxKeypairFromSecret } from '@polkadot/util-crypto';

naclBoxKeypairFromSecret(...); // => { secretKey: [...], publicKey: [...] }
```

**Parameters:**

Name | Type |
------ | ------ |
`secret` | Uint8Array |

**Returns:** *[Keypair](../interfaces/_packages_util_crypto_src_types_.keypair.md)*
