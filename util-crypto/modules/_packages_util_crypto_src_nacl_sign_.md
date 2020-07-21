[Polkadot JS Common](../README.md) › [Globals](../globals.md) › ["packages/util-crypto/src/nacl/sign"](_packages_util_crypto_src_nacl_sign_.md)

# Module: "packages/util-crypto/src/nacl/sign"

## Index

### Functions

* [naclSign](_packages_util_crypto_src_nacl_sign_.md#naclsign)

## Functions

###  naclSign

▸ **naclSign**(`message`: Uint8Array | string, `__namedParameters`: object): *Uint8Array*

*Defined in [packages/util-crypto/src/nacl/sign.ts:25](https://github.com/polkadot-js/common/blob/0a6bd414/packages/util-crypto/src/nacl/sign.ts#L25)*

**`name`** naclSign

**`summary`** Signs a message using the supplied secretKey

**`description`** 
Returns message signature of `message`, using the `secretKey`.

**`example`** 
<BR>

```javascript
import { naclSign } from '@polkadot/util-crypto';

naclSign([...], [...]); // => [...]
```

**Parameters:**

▪ **message**: *Uint8Array | string*

▪ **__namedParameters**: *object*

Name | Type |
------ | ------ |
`publicKey` | undefined &#124; Uint8Array‹› |
`secretKey` | undefined &#124; Uint8Array‹› |

**Returns:** *Uint8Array*
