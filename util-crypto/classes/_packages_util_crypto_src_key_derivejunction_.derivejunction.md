[Polkadot JS Common](../README.md) › [Globals](../globals.md) › ["packages/util-crypto/src/key/DeriveJunction"](../modules/_packages_util_crypto_src_key_derivejunction_.md) › [DeriveJunction](_packages_util_crypto_src_key_derivejunction_.derivejunction.md)

# Class: DeriveJunction

## Hierarchy

* **DeriveJunction**

## Index

### Accessors

* [chainCode](_packages_util_crypto_src_key_derivejunction_.derivejunction.md#chaincode)
* [isHard](_packages_util_crypto_src_key_derivejunction_.derivejunction.md#ishard)
* [isSoft](_packages_util_crypto_src_key_derivejunction_.derivejunction.md#issoft)

### Methods

* [hard](_packages_util_crypto_src_key_derivejunction_.derivejunction.md#hard)
* [harden](_packages_util_crypto_src_key_derivejunction_.derivejunction.md#harden)
* [soft](_packages_util_crypto_src_key_derivejunction_.derivejunction.md#soft)
* [soften](_packages_util_crypto_src_key_derivejunction_.derivejunction.md#soften)
* [from](_packages_util_crypto_src_key_derivejunction_.derivejunction.md#static-from)

## Accessors

###  chainCode

• **get chainCode**(): *Uint8Array*

*Defined in [packages/util-crypto/src/key/DeriveJunction.ts:41](https://github.com/polkadot-js/common/blob/e845132d/packages/util-crypto/src/key/DeriveJunction.ts#L41)*

**Returns:** *Uint8Array*

___

###  isHard

• **get isHard**(): *boolean*

*Defined in [packages/util-crypto/src/key/DeriveJunction.ts:45](https://github.com/polkadot-js/common/blob/e845132d/packages/util-crypto/src/key/DeriveJunction.ts#L45)*

**Returns:** *boolean*

___

###  isSoft

• **get isSoft**(): *boolean*

*Defined in [packages/util-crypto/src/key/DeriveJunction.ts:49](https://github.com/polkadot-js/common/blob/e845132d/packages/util-crypto/src/key/DeriveJunction.ts#L49)*

**Returns:** *boolean*

## Methods

###  hard

▸ **hard**(`value`: number | string | BigInt | BN | Uint8Array): *[DeriveJunction](_packages_util_crypto_src_key_derivejunction_.derivejunction.md)*

*Defined in [packages/util-crypto/src/key/DeriveJunction.ts:53](https://github.com/polkadot-js/common/blob/e845132d/packages/util-crypto/src/key/DeriveJunction.ts#L53)*

**Parameters:**

Name | Type |
------ | ------ |
`value` | number &#124; string &#124; BigInt &#124; BN &#124; Uint8Array |

**Returns:** *[DeriveJunction](_packages_util_crypto_src_key_derivejunction_.derivejunction.md)*

___

###  harden

▸ **harden**(): *[DeriveJunction](_packages_util_crypto_src_key_derivejunction_.derivejunction.md)*

*Defined in [packages/util-crypto/src/key/DeriveJunction.ts:57](https://github.com/polkadot-js/common/blob/e845132d/packages/util-crypto/src/key/DeriveJunction.ts#L57)*

**Returns:** *[DeriveJunction](_packages_util_crypto_src_key_derivejunction_.derivejunction.md)*

___

###  soft

▸ **soft**(`value`: number | string | BigInt | BN | Uint8Array): *[DeriveJunction](_packages_util_crypto_src_key_derivejunction_.derivejunction.md)*

*Defined in [packages/util-crypto/src/key/DeriveJunction.ts:63](https://github.com/polkadot-js/common/blob/e845132d/packages/util-crypto/src/key/DeriveJunction.ts#L63)*

**Parameters:**

Name | Type |
------ | ------ |
`value` | number &#124; string &#124; BigInt &#124; BN &#124; Uint8Array |

**Returns:** *[DeriveJunction](_packages_util_crypto_src_key_derivejunction_.derivejunction.md)*

___

###  soften

▸ **soften**(): *[DeriveJunction](_packages_util_crypto_src_key_derivejunction_.derivejunction.md)*

*Defined in [packages/util-crypto/src/key/DeriveJunction.ts:82](https://github.com/polkadot-js/common/blob/e845132d/packages/util-crypto/src/key/DeriveJunction.ts#L82)*

**Returns:** *[DeriveJunction](_packages_util_crypto_src_key_derivejunction_.derivejunction.md)*

___

### `Static` from

▸ **from**(`value`: string): *[DeriveJunction](_packages_util_crypto_src_key_derivejunction_.derivejunction.md)*

*Defined in [packages/util-crypto/src/key/DeriveJunction.ts:24](https://github.com/polkadot-js/common/blob/e845132d/packages/util-crypto/src/key/DeriveJunction.ts#L24)*

**Parameters:**

Name | Type |
------ | ------ |
`value` | string |

**Returns:** *[DeriveJunction](_packages_util_crypto_src_key_derivejunction_.derivejunction.md)*
