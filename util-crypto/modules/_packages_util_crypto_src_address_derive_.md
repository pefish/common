[Polkadot JS Common](../README.md) › [Globals](../globals.md) › ["packages/util-crypto/src/address/derive"](_packages_util_crypto_src_address_derive_.md)

# Module: "packages/util-crypto/src/address/derive"

## Index

### Functions

* [deriveAddress](_packages_util_crypto_src_address_derive_.md#deriveaddress)

## Functions

###  deriveAddress

▸ **deriveAddress**(`who`: Uint8Array | string, `suri`: string, `ss58Format?`: [Prefix](_packages_util_crypto_src_address_types_.md#prefix)): *string*

*Defined in [packages/util-crypto/src/address/derive.ts:21](https://github.com/polkadot-js/common/blob/0d03eac3/packages/util-crypto/src/address/derive.ts#L21)*

**`name`** deriveAddress

**`summary`** Creates a sr25519 derived address from the supplied and path.

**`description`** 
Creates a sr25519 derived address based on the input address/publicKey and the uri supplied.

**Parameters:**

Name | Type |
------ | ------ |
`who` | Uint8Array &#124; string |
`suri` | string |
`ss58Format?` | [Prefix](_packages_util_crypto_src_address_types_.md#prefix) |

**Returns:** *string*
