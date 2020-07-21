[Polkadot JS Common](../README.md) › [Globals](../globals.md) › ["packages/util-crypto/src/address/encodeDerived"](_packages_util_crypto_src_address_encodederived_.md)

# Module: "packages/util-crypto/src/address/encodeDerived"

## Index

### Functions

* [encodeDerivedAddress](_packages_util_crypto_src_address_encodederived_.md#encodederivedaddress)

## Functions

###  encodeDerivedAddress

▸ **encodeDerivedAddress**(`who`: Uint8Array | string, `index`: BigInt | BN | number, `ss58Format?`: [Prefix](_packages_util_crypto_src_address_types_.md#prefix)): *string*

*Defined in [packages/util-crypto/src/address/encodeDerived.ts:19](https://github.com/polkadot-js/common/blob/0a6bd414/packages/util-crypto/src/address/encodeDerived.ts#L19)*

**`name`** encodeDerivedAddress

**`summary`** Creates a derived address.

**`description`** 
Creates a Substrate derived address based on the input address/publicKey and the index supplied.

**Parameters:**

Name | Type |
------ | ------ |
`who` | Uint8Array &#124; string |
`index` | BigInt &#124; BN &#124; number |
`ss58Format?` | [Prefix](_packages_util_crypto_src_address_types_.md#prefix) |

**Returns:** *string*
