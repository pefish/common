[Polkadot JS Common](../README.md) › [Globals](../globals.md) › ["packages/util-crypto/src/secp256k1/sign"](_packages_util_crypto_src_secp256k1_sign_.md)

# Module: "packages/util-crypto/src/secp256k1/sign"

## Index

### Functions

* [secp256k1Sign](_packages_util_crypto_src_secp256k1_sign_.md#secp256k1sign)

## Functions

###  secp256k1Sign

▸ **secp256k1Sign**(`message`: Uint8Array | string, `__namedParameters`: object, `hashType`: [HashType](_packages_util_crypto_src_secp256k1_types_.md#hashtype)): *Uint8Array*

*Defined in [packages/util-crypto/src/secp256k1/sign.ts:20](https://github.com/polkadot-js/common/blob/61b57687/packages/util-crypto/src/secp256k1/sign.ts#L20)*

**`name`** secp256k1Sign

**`description`** Returns message signature of `message`, using the supplied pair

**Parameters:**

▪ **message**: *Uint8Array | string*

▪ **__namedParameters**: *object*

Name | Type |
------ | ------ |
`secretKey` | undefined &#124; Uint8Array‹› |

▪`Default value`  **hashType**: *[HashType](_packages_util_crypto_src_secp256k1_types_.md#hashtype)*= "blake2"

**Returns:** *Uint8Array*
