[Polkadot JS Common](../README.md) › [Globals](../globals.md) › ["packages/util-crypto/src/schnorrkel/sign"](_packages_util_crypto_src_schnorrkel_sign_.md)

# Module: "packages/util-crypto/src/schnorrkel/sign"

## Index

### Functions

* [schnorrkelSign](_packages_util_crypto_src_schnorrkel_sign_.md#schnorrkelsign)

## Functions

###  schnorrkelSign

▸ **schnorrkelSign**(`message`: Uint8Array | string, `__namedParameters`: object): *Uint8Array*

*Defined in [packages/util-crypto/src/schnorrkel/sign.ts:16](https://github.com/polkadot-js/common/blob/038ef42f/packages/util-crypto/src/schnorrkel/sign.ts#L16)*

**`name`** schnorrkelSign

**`description`** Returns message signature of `message`, using the supplied pair

**Parameters:**

▪ **message**: *Uint8Array | string*

▪ **__namedParameters**: *object*

Name | Type |
------ | ------ |
`publicKey` | undefined &#124; Uint8Array‹› |
`secretKey` | undefined &#124; Uint8Array‹› |

**Returns:** *Uint8Array*
