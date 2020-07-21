[Polkadot JS Common](../README.md) › [Globals](../globals.md) › ["packages/keyring/src/pair/decode"](_packages_keyring_src_pair_decode_.md)

# Module: "packages/keyring/src/pair/decode"

## Index

### Functions

* [decode](_packages_keyring_src_pair_decode_.md#decode)

## Functions

###  decode

▸ **decode**(`passphrase?`: undefined | string, `encrypted?`: Uint8Array | null, `encType`: [KeyringPair$JsonEncodingTypes](_packages_keyring_src_types_.md#keyringpairjsonencodingtypes)[]): *DecodeResult*

*Defined in [packages/keyring/src/pair/decode.ts:46](https://github.com/polkadot-js/common/blob/1c6b4bfc/packages/keyring/src/pair/decode.ts#L46)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`passphrase?` | undefined &#124; string | - |
`encrypted?` | Uint8Array &#124; null | - |
`encType` | [KeyringPair$JsonEncodingTypes](_packages_keyring_src_types_.md#keyringpairjsonencodingtypes)[] | ['scrypt', 'xsalsa20-poly1305'] |

**Returns:** *DecodeResult*
