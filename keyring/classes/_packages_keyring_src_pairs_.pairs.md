[Polkadot JS Common](../README.md) › [Globals](../globals.md) › ["packages/keyring/src/pairs"](../modules/_packages_keyring_src_pairs_.md) › [Pairs](_packages_keyring_src_pairs_.pairs.md)

# Class: Pairs

## Hierarchy

* **Pairs**

## Implements

* [KeyringPairs](../interfaces/_packages_keyring_src_types_.keyringpairs.md)

## Index

### Methods

* [add](_packages_keyring_src_pairs_.pairs.md#add)
* [all](_packages_keyring_src_pairs_.pairs.md#all)
* [get](_packages_keyring_src_pairs_.pairs.md#get)
* [remove](_packages_keyring_src_pairs_.pairs.md#remove)

## Methods

###  add

▸ **add**(`pair`: [KeyringPair](../interfaces/_packages_keyring_src_types_.keyringpair.md)): *[KeyringPair](../interfaces/_packages_keyring_src_types_.keyringpair.md)*

*Defined in [packages/keyring/src/pairs.ts:15](https://github.com/polkadot-js/common/blob/0d03eac3/packages/keyring/src/pairs.ts#L15)*

**Parameters:**

Name | Type |
------ | ------ |
`pair` | [KeyringPair](../interfaces/_packages_keyring_src_types_.keyringpair.md) |

**Returns:** *[KeyringPair](../interfaces/_packages_keyring_src_types_.keyringpair.md)*

___

###  all

▸ **all**(): *[KeyringPair](../interfaces/_packages_keyring_src_types_.keyringpair.md)[]*

*Defined in [packages/keyring/src/pairs.ts:21](https://github.com/polkadot-js/common/blob/0d03eac3/packages/keyring/src/pairs.ts#L21)*

**Returns:** *[KeyringPair](../interfaces/_packages_keyring_src_types_.keyringpair.md)[]*

___

###  get

▸ **get**(`address`: string | Uint8Array): *[KeyringPair](../interfaces/_packages_keyring_src_types_.keyringpair.md)*

*Defined in [packages/keyring/src/pairs.ts:25](https://github.com/polkadot-js/common/blob/0d03eac3/packages/keyring/src/pairs.ts#L25)*

**Parameters:**

Name | Type |
------ | ------ |
`address` | string &#124; Uint8Array |

**Returns:** *[KeyringPair](../interfaces/_packages_keyring_src_types_.keyringpair.md)*

___

###  remove

▸ **remove**(`address`: string | Uint8Array): *void*

*Defined in [packages/keyring/src/pairs.ts:39](https://github.com/polkadot-js/common/blob/0d03eac3/packages/keyring/src/pairs.ts#L39)*

**Parameters:**

Name | Type |
------ | ------ |
`address` | string &#124; Uint8Array |

**Returns:** *void*
