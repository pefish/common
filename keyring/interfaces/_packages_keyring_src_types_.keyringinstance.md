[Polkadot JS Common](../README.md) › [Globals](../globals.md) › ["packages/keyring/src/types"](../modules/_packages_keyring_src_types_.md) › [KeyringInstance](_packages_keyring_src_types_.keyringinstance.md)

# Interface: KeyringInstance

## Hierarchy

* **KeyringInstance**

## Implemented by

* [Keyring](../classes/_packages_keyring_src_keyring_.keyring.md)

## Index

### Properties

* [pairs](_packages_keyring_src_types_.keyringinstance.md#readonly-pairs)
* [publicKeys](_packages_keyring_src_types_.keyringinstance.md#readonly-publickeys)
* [type](_packages_keyring_src_types_.keyringinstance.md#readonly-type)

### Methods

* [addFromAddress](_packages_keyring_src_types_.keyringinstance.md#addfromaddress)
* [addFromJson](_packages_keyring_src_types_.keyringinstance.md#addfromjson)
* [addFromMnemonic](_packages_keyring_src_types_.keyringinstance.md#addfrommnemonic)
* [addFromSeed](_packages_keyring_src_types_.keyringinstance.md#addfromseed)
* [addFromUri](_packages_keyring_src_types_.keyringinstance.md#addfromuri)
* [addPair](_packages_keyring_src_types_.keyringinstance.md#addpair)
* [createFromUri](_packages_keyring_src_types_.keyringinstance.md#createfromuri)
* [decodeAddress](_packages_keyring_src_types_.keyringinstance.md#decodeaddress)
* [encodeAddress](_packages_keyring_src_types_.keyringinstance.md#encodeaddress)
* [getPair](_packages_keyring_src_types_.keyringinstance.md#getpair)
* [getPairs](_packages_keyring_src_types_.keyringinstance.md#getpairs)
* [getPublicKeys](_packages_keyring_src_types_.keyringinstance.md#getpublickeys)
* [removePair](_packages_keyring_src_types_.keyringinstance.md#removepair)
* [setSS58Format](_packages_keyring_src_types_.keyringinstance.md#setss58format)
* [toJson](_packages_keyring_src_types_.keyringinstance.md#tojson)

## Properties

### `Readonly` pairs

• **pairs**: *[KeyringPair](_packages_keyring_src_types_.keyringpair.md)[]*

*Defined in [packages/keyring/src/types.ts:61](https://github.com/polkadot-js/common/blob/e487d0a4/packages/keyring/src/types.ts#L61)*

___

### `Readonly` publicKeys

• **publicKeys**: *Uint8Array[]*

*Defined in [packages/keyring/src/types.ts:62](https://github.com/polkadot-js/common/blob/e487d0a4/packages/keyring/src/types.ts#L62)*

___

### `Readonly` type

• **type**: *KeypairType*

*Defined in [packages/keyring/src/types.ts:63](https://github.com/polkadot-js/common/blob/e487d0a4/packages/keyring/src/types.ts#L63)*

## Methods

###  addFromAddress

▸ **addFromAddress**(`address`: string | Uint8Array, `meta?`: [KeyringPair$Meta](../modules/_packages_keyring_src_types_.md#keyringpairmeta), `encoded?`: Uint8Array | null, `type?`: KeypairType, `ignoreChecksum?`: undefined | false | true): *[KeyringPair](_packages_keyring_src_types_.keyringpair.md)*

*Defined in [packages/keyring/src/types.ts:70](https://github.com/polkadot-js/common/blob/e487d0a4/packages/keyring/src/types.ts#L70)*

**Parameters:**

Name | Type |
------ | ------ |
`address` | string &#124; Uint8Array |
`meta?` | [KeyringPair$Meta](../modules/_packages_keyring_src_types_.md#keyringpairmeta) |
`encoded?` | Uint8Array &#124; null |
`type?` | KeypairType |
`ignoreChecksum?` | undefined &#124; false &#124; true |

**Returns:** *[KeyringPair](_packages_keyring_src_types_.keyringpair.md)*

___

###  addFromJson

▸ **addFromJson**(`pair`: [KeyringPair$Json](_packages_keyring_src_types_.keyringpair_json.md), `ignoreChecksum?`: undefined | false | true): *[KeyringPair](_packages_keyring_src_types_.keyringpair.md)*

*Defined in [packages/keyring/src/types.ts:71](https://github.com/polkadot-js/common/blob/e487d0a4/packages/keyring/src/types.ts#L71)*

**Parameters:**

Name | Type |
------ | ------ |
`pair` | [KeyringPair$Json](_packages_keyring_src_types_.keyringpair_json.md) |
`ignoreChecksum?` | undefined &#124; false &#124; true |

**Returns:** *[KeyringPair](_packages_keyring_src_types_.keyringpair.md)*

___

###  addFromMnemonic

▸ **addFromMnemonic**(`mnemonic`: string, `meta?`: [KeyringPair$Meta](../modules/_packages_keyring_src_types_.md#keyringpairmeta), `type?`: KeypairType): *[KeyringPair](_packages_keyring_src_types_.keyringpair.md)*

*Defined in [packages/keyring/src/types.ts:72](https://github.com/polkadot-js/common/blob/e487d0a4/packages/keyring/src/types.ts#L72)*

**Parameters:**

Name | Type |
------ | ------ |
`mnemonic` | string |
`meta?` | [KeyringPair$Meta](../modules/_packages_keyring_src_types_.md#keyringpairmeta) |
`type?` | KeypairType |

**Returns:** *[KeyringPair](_packages_keyring_src_types_.keyringpair.md)*

___

###  addFromSeed

▸ **addFromSeed**(`seed`: Uint8Array, `meta?`: [KeyringPair$Meta](../modules/_packages_keyring_src_types_.md#keyringpairmeta), `type?`: KeypairType): *[KeyringPair](_packages_keyring_src_types_.keyringpair.md)*

*Defined in [packages/keyring/src/types.ts:73](https://github.com/polkadot-js/common/blob/e487d0a4/packages/keyring/src/types.ts#L73)*

**Parameters:**

Name | Type |
------ | ------ |
`seed` | Uint8Array |
`meta?` | [KeyringPair$Meta](../modules/_packages_keyring_src_types_.md#keyringpairmeta) |
`type?` | KeypairType |

**Returns:** *[KeyringPair](_packages_keyring_src_types_.keyringpair.md)*

___

###  addFromUri

▸ **addFromUri**(`suri`: string, `meta?`: [KeyringPair$Meta](../modules/_packages_keyring_src_types_.md#keyringpairmeta), `type?`: KeypairType): *[KeyringPair](_packages_keyring_src_types_.keyringpair.md)*

*Defined in [packages/keyring/src/types.ts:74](https://github.com/polkadot-js/common/blob/e487d0a4/packages/keyring/src/types.ts#L74)*

**Parameters:**

Name | Type |
------ | ------ |
`suri` | string |
`meta?` | [KeyringPair$Meta](../modules/_packages_keyring_src_types_.md#keyringpairmeta) |
`type?` | KeypairType |

**Returns:** *[KeyringPair](_packages_keyring_src_types_.keyringpair.md)*

___

###  addPair

▸ **addPair**(`pair`: [KeyringPair](_packages_keyring_src_types_.keyringpair.md)): *[KeyringPair](_packages_keyring_src_types_.keyringpair.md)*

*Defined in [packages/keyring/src/types.ts:69](https://github.com/polkadot-js/common/blob/e487d0a4/packages/keyring/src/types.ts#L69)*

**Parameters:**

Name | Type |
------ | ------ |
`pair` | [KeyringPair](_packages_keyring_src_types_.keyringpair.md) |

**Returns:** *[KeyringPair](_packages_keyring_src_types_.keyringpair.md)*

___

###  createFromUri

▸ **createFromUri**(`suri`: string, `meta?`: [KeyringPair$Meta](../modules/_packages_keyring_src_types_.md#keyringpairmeta), `type?`: KeypairType): *[KeyringPair](_packages_keyring_src_types_.keyringpair.md)*

*Defined in [packages/keyring/src/types.ts:75](https://github.com/polkadot-js/common/blob/e487d0a4/packages/keyring/src/types.ts#L75)*

**Parameters:**

Name | Type |
------ | ------ |
`suri` | string |
`meta?` | [KeyringPair$Meta](../modules/_packages_keyring_src_types_.md#keyringpairmeta) |
`type?` | KeypairType |

**Returns:** *[KeyringPair](_packages_keyring_src_types_.keyringpair.md)*

___

###  decodeAddress

▸ **decodeAddress**(`encoded`: string | Uint8Array, `ignoreChecksum?`: undefined | false | true, `ss58Format?`: Prefix): *Uint8Array*

*Defined in [packages/keyring/src/types.ts:65](https://github.com/polkadot-js/common/blob/e487d0a4/packages/keyring/src/types.ts#L65)*

**Parameters:**

Name | Type |
------ | ------ |
`encoded` | string &#124; Uint8Array |
`ignoreChecksum?` | undefined &#124; false &#124; true |
`ss58Format?` | Prefix |

**Returns:** *Uint8Array*

___

###  encodeAddress

▸ **encodeAddress**(`key`: Uint8Array | string, `ss58Format?`: Prefix): *string*

*Defined in [packages/keyring/src/types.ts:66](https://github.com/polkadot-js/common/blob/e487d0a4/packages/keyring/src/types.ts#L66)*

**Parameters:**

Name | Type |
------ | ------ |
`key` | Uint8Array &#124; string |
`ss58Format?` | Prefix |

**Returns:** *string*

___

###  getPair

▸ **getPair**(`address`: string | Uint8Array): *[KeyringPair](_packages_keyring_src_types_.keyringpair.md)*

*Defined in [packages/keyring/src/types.ts:76](https://github.com/polkadot-js/common/blob/e487d0a4/packages/keyring/src/types.ts#L76)*

**Parameters:**

Name | Type |
------ | ------ |
`address` | string &#124; Uint8Array |

**Returns:** *[KeyringPair](_packages_keyring_src_types_.keyringpair.md)*

___

###  getPairs

▸ **getPairs**(): *[KeyringPair](_packages_keyring_src_types_.keyringpair.md)[]*

*Defined in [packages/keyring/src/types.ts:77](https://github.com/polkadot-js/common/blob/e487d0a4/packages/keyring/src/types.ts#L77)*

**Returns:** *[KeyringPair](_packages_keyring_src_types_.keyringpair.md)[]*

___

###  getPublicKeys

▸ **getPublicKeys**(): *Uint8Array[]*

*Defined in [packages/keyring/src/types.ts:78](https://github.com/polkadot-js/common/blob/e487d0a4/packages/keyring/src/types.ts#L78)*

**Returns:** *Uint8Array[]*

___

###  removePair

▸ **removePair**(`address`: string | Uint8Array): *void*

*Defined in [packages/keyring/src/types.ts:79](https://github.com/polkadot-js/common/blob/e487d0a4/packages/keyring/src/types.ts#L79)*

**Parameters:**

Name | Type |
------ | ------ |
`address` | string &#124; Uint8Array |

**Returns:** *void*

___

###  setSS58Format

▸ **setSS58Format**(`ss58Format`: Prefix): *void*

*Defined in [packages/keyring/src/types.ts:67](https://github.com/polkadot-js/common/blob/e487d0a4/packages/keyring/src/types.ts#L67)*

**Parameters:**

Name | Type |
------ | ------ |
`ss58Format` | Prefix |

**Returns:** *void*

___

###  toJson

▸ **toJson**(`address`: string | Uint8Array, `passphrase?`: undefined | string): *[KeyringPair$Json](_packages_keyring_src_types_.keyringpair_json.md)*

*Defined in [packages/keyring/src/types.ts:80](https://github.com/polkadot-js/common/blob/e487d0a4/packages/keyring/src/types.ts#L80)*

**Parameters:**

Name | Type |
------ | ------ |
`address` | string &#124; Uint8Array |
`passphrase?` | undefined &#124; string |

**Returns:** *[KeyringPair$Json](_packages_keyring_src_types_.keyringpair_json.md)*
