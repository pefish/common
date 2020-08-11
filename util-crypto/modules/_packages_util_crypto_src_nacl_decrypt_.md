[Polkadot JS Common](../README.md) › [Globals](../globals.md) › ["packages/util-crypto/src/nacl/decrypt"](_packages_util_crypto_src_nacl_decrypt_.md)

# Module: "packages/util-crypto/src/nacl/decrypt"

## Index

### Functions

* [naclDecrypt](_packages_util_crypto_src_nacl_decrypt_.md#nacldecrypt)

## Functions

###  naclDecrypt

▸ **naclDecrypt**(`encrypted`: Uint8Array, `nonce`: Uint8Array, `secret`: Uint8Array): *Uint8Array | null*

*Defined in [packages/util-crypto/src/nacl/decrypt.ts:21](https://github.com/polkadot-js/common/blob/f5acd602/packages/util-crypto/src/nacl/decrypt.ts#L21)*

**`name`** naclDecrypt

**`summary`** Decrypts a message using the supplied secretKey and nonce

**`description`** 
Returns an decrypted message, using the `secret` and `nonce`.

**`example`** 
<BR>

```javascript
import { naclDecrypt } from '@polkadot/util-crypto';

naclDecrypt([...], [...], [...]); // => [...]
```

**Parameters:**

Name | Type |
------ | ------ |
`encrypted` | Uint8Array |
`nonce` | Uint8Array |
`secret` | Uint8Array |

**Returns:** *Uint8Array | null*
