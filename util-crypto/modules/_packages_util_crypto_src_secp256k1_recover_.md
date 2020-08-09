[Polkadot JS Common](../README.md) › [Globals](../globals.md) › ["packages/util-crypto/src/secp256k1/recover"](_packages_util_crypto_src_secp256k1_recover_.md)

# Module: "packages/util-crypto/src/secp256k1/recover"

## Index

### Functions

* [secp256k1Recover](_packages_util_crypto_src_secp256k1_recover_.md#secp256k1recover)

## Functions

###  secp256k1Recover

▸ **secp256k1Recover**(`message`: Uint8Array, `signature`: Uint8Array, `recovery`: number): *Uint8Array*

*Defined in [packages/util-crypto/src/secp256k1/recover.ts:14](https://github.com/polkadot-js/common/blob/9d145e72/packages/util-crypto/src/secp256k1/recover.ts#L14)*

**`name`** secp256k1Recover

**`description`** Recovers a publicKey from the supplied signature

**Parameters:**

Name | Type |
------ | ------ |
`message` | Uint8Array |
`signature` | Uint8Array |
`recovery` | number |

**Returns:** *Uint8Array*
