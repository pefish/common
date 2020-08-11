[Polkadot JS Common](../README.md) › [Globals](../globals.md) › ["packages/util-crypto/src/nacl/open"](_packages_util_crypto_src_nacl_open_.md)

# Module: "packages/util-crypto/src/nacl/open"

## Index

### Functions

* [naclOpen](_packages_util_crypto_src_nacl_open_.md#naclopen)

## Functions

###  naclOpen

▸ **naclOpen**(`sealed`: Uint8Array, `nonce`: Uint8Array, `senderBoxPublic`: Uint8Array, `receiverBoxSecret`: Uint8Array): *Uint8Array | null*

*Defined in [packages/util-crypto/src/nacl/open.ts:21](https://github.com/polkadot-js/common/blob/f5acd602/packages/util-crypto/src/nacl/open.ts#L21)*

**`name`** naclOpen

**`summary`** Opens a message using the receiver's secretKey and nonce

**`description`** 
Returns a message sealed by the sender, using the receiver's `secret` and `nonce`.

**`example`** 
<BR>

```javascript
import { naclOpen } from '@polkadot/util-crypto';

naclOpen([...], [...], [...]); // => [...]
```

**Parameters:**

Name | Type |
------ | ------ |
`sealed` | Uint8Array |
`nonce` | Uint8Array |
`senderBoxPublic` | Uint8Array |
`receiverBoxSecret` | Uint8Array |

**Returns:** *Uint8Array | null*
