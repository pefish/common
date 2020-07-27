[Polkadot JS Common](../README.md) › [Globals](../globals.md) › ["packages/keyring/src/types"](../modules/_packages_keyring_src_types_.md) › [KeyringPairs](_packages_keyring_src_types_.keyringpairs.md)

# Interface: KeyringPairs

## Hierarchy

* **KeyringPairs**

## Implemented by

* [Pairs](../classes/_packages_keyring_src_pairs_.pairs.md)

## Index

### Properties

* [add](_packages_keyring_src_types_.keyringpairs.md#add)
* [all](_packages_keyring_src_types_.keyringpairs.md#all)
* [get](_packages_keyring_src_types_.keyringpairs.md#get)
* [remove](_packages_keyring_src_types_.keyringpairs.md#remove)

## Properties

###  add

• **add**: *function*

*Defined in [packages/keyring/src/types.ts:54](https://github.com/polkadot-js/common/blob/db61ea30/packages/keyring/src/types.ts#L54)*

#### Type declaration:

▸ (`pair`: [KeyringPair](_packages_keyring_src_types_.keyringpair.md)): *[KeyringPair](_packages_keyring_src_types_.keyringpair.md)*

**Parameters:**

Name | Type |
------ | ------ |
`pair` | [KeyringPair](_packages_keyring_src_types_.keyringpair.md) |

___

###  all

• **all**: *function*

*Defined in [packages/keyring/src/types.ts:55](https://github.com/polkadot-js/common/blob/db61ea30/packages/keyring/src/types.ts#L55)*

#### Type declaration:

▸ (): *[KeyringPair](_packages_keyring_src_types_.keyringpair.md)[]*

___

###  get

• **get**: *function*

*Defined in [packages/keyring/src/types.ts:56](https://github.com/polkadot-js/common/blob/db61ea30/packages/keyring/src/types.ts#L56)*

#### Type declaration:

▸ (`address`: string | Uint8Array): *[KeyringPair](_packages_keyring_src_types_.keyringpair.md)*

**Parameters:**

Name | Type |
------ | ------ |
`address` | string &#124; Uint8Array |

___

###  remove

• **remove**: *function*

*Defined in [packages/keyring/src/types.ts:57](https://github.com/polkadot-js/common/blob/db61ea30/packages/keyring/src/types.ts#L57)*

#### Type declaration:

▸ (`address`: string | Uint8Array): *void*

**Parameters:**

Name | Type |
------ | ------ |
`address` | string &#124; Uint8Array |
