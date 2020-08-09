[Polkadot JS Common](../README.md) › [Globals](../globals.md) › ["packages/util-crypto/src/scrypt/encode"](_packages_util_crypto_src_scrypt_encode_.md)

# Module: "packages/util-crypto/src/scrypt/encode"

## Index

### Functions

* [scryptEncode](_packages_util_crypto_src_scrypt_encode_.md#scryptencode)

## Functions

###  scryptEncode

▸ **scryptEncode**(`passphrase?`: Uint8Array | string, `salt`: Uint8Array‹›, `params`: object): *Result*

*Defined in [packages/util-crypto/src/scrypt/encode.ts:20](https://github.com/polkadot-js/common/blob/0d03eac3/packages/util-crypto/src/scrypt/encode.ts#L20)*

**Parameters:**

▪`Optional`  **passphrase**: *Uint8Array | string*

▪`Default value`  **salt**: *Uint8Array‹›*= randomAsU8a()

▪`Default value`  **params**: *object*= DEFAULT_PARAMS

Name | Type | Default |
------ | ------ | ------ |
`N` | number | 1 << 15 |
`p` | number | 1 |
`r` | number | 8 |

**Returns:** *Result*
