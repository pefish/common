[Polkadot JS Common](../README.md) › [Globals](../globals.md) › ["packages/keyring/src/types"](../modules/_packages_keyring_src_types_.md) › [KeyringPair](_packages_keyring_src_types_.keyringpair.md)

# Interface: KeyringPair

## Hierarchy

* **KeyringPair**

## Index

### Properties

* [address](_packages_keyring_src_types_.keyringpair.md#readonly-address)
* [decodePkcs8](_packages_keyring_src_types_.keyringpair.md#decodepkcs8)
* [derive](_packages_keyring_src_types_.keyringpair.md#derive)
* [encodePkcs8](_packages_keyring_src_types_.keyringpair.md#encodepkcs8)
* [isLocked](_packages_keyring_src_types_.keyringpair.md#readonly-islocked)
* [lock](_packages_keyring_src_types_.keyringpair.md#lock)
* [meta](_packages_keyring_src_types_.keyringpair.md#readonly-meta)
* [publicKey](_packages_keyring_src_types_.keyringpair.md#readonly-publickey)
* [setMeta](_packages_keyring_src_types_.keyringpair.md#setmeta)
* [type](_packages_keyring_src_types_.keyringpair.md#readonly-type)

### Methods

* [sign](_packages_keyring_src_types_.keyringpair.md#sign)
* [toJson](_packages_keyring_src_types_.keyringpair.md#tojson)
* [verify](_packages_keyring_src_types_.keyringpair.md#verify)

## Properties

### `Readonly` address

• **address**: *string*

*Defined in [packages/keyring/src/types.ts:37](https://github.com/polkadot-js/common/blob/61b57687/packages/keyring/src/types.ts#L37)*

___

###  decodePkcs8

• **decodePkcs8**: *function*

*Defined in [packages/keyring/src/types.ts:43](https://github.com/polkadot-js/common/blob/61b57687/packages/keyring/src/types.ts#L43)*

#### Type declaration:

▸ (`passphrase?`: undefined | string, `encoded?`: Uint8Array): *void*

**Parameters:**

Name | Type |
------ | ------ |
`passphrase?` | undefined &#124; string |
`encoded?` | Uint8Array |

___

###  derive

• **derive**: *function*

*Defined in [packages/keyring/src/types.ts:44](https://github.com/polkadot-js/common/blob/61b57687/packages/keyring/src/types.ts#L44)*

#### Type declaration:

▸ (`suri`: string, `meta?`: [KeyringPair$Meta](../modules/_packages_keyring_src_types_.md#keyringpairmeta)): *[KeyringPair](_packages_keyring_src_types_.keyringpair.md)*

**Parameters:**

Name | Type |
------ | ------ |
`suri` | string |
`meta?` | [KeyringPair$Meta](../modules/_packages_keyring_src_types_.md#keyringpairmeta) |

___

###  encodePkcs8

• **encodePkcs8**: *function*

*Defined in [packages/keyring/src/types.ts:45](https://github.com/polkadot-js/common/blob/61b57687/packages/keyring/src/types.ts#L45)*

#### Type declaration:

▸ (`passphrase?`: undefined | string): *Uint8Array*

**Parameters:**

Name | Type |
------ | ------ |
`passphrase?` | undefined &#124; string |

___

### `Readonly` isLocked

• **isLocked**: *boolean*

*Defined in [packages/keyring/src/types.ts:39](https://github.com/polkadot-js/common/blob/61b57687/packages/keyring/src/types.ts#L39)*

___

###  lock

• **lock**: *function*

*Defined in [packages/keyring/src/types.ts:46](https://github.com/polkadot-js/common/blob/61b57687/packages/keyring/src/types.ts#L46)*

#### Type declaration:

▸ (): *void*

___

### `Readonly` meta

• **meta**: *[KeyringPair$Meta](../modules/_packages_keyring_src_types_.md#keyringpairmeta)*

*Defined in [packages/keyring/src/types.ts:38](https://github.com/polkadot-js/common/blob/61b57687/packages/keyring/src/types.ts#L38)*

___

### `Readonly` publicKey

• **publicKey**: *Uint8Array*

*Defined in [packages/keyring/src/types.ts:40](https://github.com/polkadot-js/common/blob/61b57687/packages/keyring/src/types.ts#L40)*

___

###  setMeta

• **setMeta**: *function*

*Defined in [packages/keyring/src/types.ts:47](https://github.com/polkadot-js/common/blob/61b57687/packages/keyring/src/types.ts#L47)*

#### Type declaration:

▸ (`meta`: [KeyringPair$Meta](../modules/_packages_keyring_src_types_.md#keyringpairmeta)): *void*

**Parameters:**

Name | Type |
------ | ------ |
`meta` | [KeyringPair$Meta](../modules/_packages_keyring_src_types_.md#keyringpairmeta) |

___

### `Readonly` type

• **type**: *KeypairType*

*Defined in [packages/keyring/src/types.ts:41](https://github.com/polkadot-js/common/blob/61b57687/packages/keyring/src/types.ts#L41)*

## Methods

###  sign

▸ **sign**(`message`: Uint8Array, `options?`: [SignOptions](_packages_keyring_src_types_.signoptions.md)): *Uint8Array*

*Defined in [packages/keyring/src/types.ts:48](https://github.com/polkadot-js/common/blob/61b57687/packages/keyring/src/types.ts#L48)*

**Parameters:**

Name | Type |
------ | ------ |
`message` | Uint8Array |
`options?` | [SignOptions](_packages_keyring_src_types_.signoptions.md) |

**Returns:** *Uint8Array*

___

###  toJson

▸ **toJson**(`passphrase?`: undefined | string): *[KeyringPair$Json](_packages_keyring_src_types_.keyringpair_json.md)*

*Defined in [packages/keyring/src/types.ts:49](https://github.com/polkadot-js/common/blob/61b57687/packages/keyring/src/types.ts#L49)*

**Parameters:**

Name | Type |
------ | ------ |
`passphrase?` | undefined &#124; string |

**Returns:** *[KeyringPair$Json](_packages_keyring_src_types_.keyringpair_json.md)*

___

###  verify

▸ **verify**(`message`: Uint8Array, `signature`: Uint8Array): *boolean*

*Defined in [packages/keyring/src/types.ts:50](https://github.com/polkadot-js/common/blob/61b57687/packages/keyring/src/types.ts#L50)*

**Parameters:**

Name | Type |
------ | ------ |
`message` | Uint8Array |
`signature` | Uint8Array |

**Returns:** *boolean*
