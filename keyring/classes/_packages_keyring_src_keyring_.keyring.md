[Polkadot JS Common](../README.md) › [Globals](../globals.md) › ["packages/keyring/src/keyring"](../modules/_packages_keyring_src_keyring_.md) › [Keyring](_packages_keyring_src_keyring_.keyring.md)

# Class: Keyring

# @polkadot/keyring

## Overview

**`name`** Keyring

**`summary`** Keyring management of user accounts

**`description`** Allows generation of keyring pairs from a variety of input combinations, such as
json object containing account address or public key, account metadata, and account encoded using
`addFromJson`, or by providing those values as arguments separately to `addFromAddress`,
or by providing the mnemonic (seed phrase) and account metadata as arguments to `addFromMnemonic`.
Stores the keyring pairs in a keyring pair dictionary. Removal of the keyring pairs from the keyring pair
dictionary is achieved using `removePair`. Retrieval of all the stored pairs via `getPairs` or perform
lookup of a pair for a given account address or public key using `getPair`. JSON metadata associated with
an account may be obtained using `toJson` accompanied by the account passphrase.

## Hierarchy

* **Keyring**

## Implements

* [KeyringInstance](../interfaces/_packages_keyring_src_types_.keyringinstance.md)

## Index

### Constructors

* [constructor](_packages_keyring_src_keyring_.keyring.md#constructor)

### Properties

* [decodeAddress](_packages_keyring_src_keyring_.keyring.md#decodeaddress)

### Accessors

* [pairs](_packages_keyring_src_keyring_.keyring.md#pairs)
* [publicKeys](_packages_keyring_src_keyring_.keyring.md#publickeys)
* [type](_packages_keyring_src_keyring_.keyring.md#type)

### Methods

* [addFromAddress](_packages_keyring_src_keyring_.keyring.md#addfromaddress)
* [addFromJson](_packages_keyring_src_keyring_.keyring.md#addfromjson)
* [addFromMnemonic](_packages_keyring_src_keyring_.keyring.md#addfrommnemonic)
* [addFromSeed](_packages_keyring_src_keyring_.keyring.md#addfromseed)
* [addFromUri](_packages_keyring_src_keyring_.keyring.md#addfromuri)
* [addPair](_packages_keyring_src_keyring_.keyring.md#addpair)
* [createFromUri](_packages_keyring_src_keyring_.keyring.md#createfromuri)
* [encodeAddress](_packages_keyring_src_keyring_.keyring.md#encodeaddress)
* [getPair](_packages_keyring_src_keyring_.keyring.md#getpair)
* [getPairs](_packages_keyring_src_keyring_.keyring.md#getpairs)
* [getPublicKeys](_packages_keyring_src_keyring_.keyring.md#getpublickeys)
* [removePair](_packages_keyring_src_keyring_.keyring.md#removepair)
* [setSS58Format](_packages_keyring_src_keyring_.keyring.md#setss58format)
* [toJson](_packages_keyring_src_keyring_.keyring.md#tojson)

## Constructors

###  constructor

\+ **new Keyring**(`options`: [KeyringOptions](../interfaces/_packages_keyring_src_types_.keyringoptions.md)): *[Keyring](_packages_keyring_src_keyring_.keyring.md)*

*Defined in [packages/keyring/src/keyring.ts:38](https://github.com/polkadot-js/common/blob/db61ea30/packages/keyring/src/keyring.ts#L38)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`options` | [KeyringOptions](../interfaces/_packages_keyring_src_types_.keyringoptions.md) | {} |

**Returns:** *[Keyring](_packages_keyring_src_keyring_.keyring.md)*

## Properties

###  decodeAddress

• **decodeAddress**: *decode* = decodeAddress

*Implementation of [KeyringInstance](../interfaces/_packages_keyring_src_types_.keyringinstance.md).[decodeAddress](../interfaces/_packages_keyring_src_types_.keyringinstance.md#decodeaddress)*

*Defined in [packages/keyring/src/keyring.ts:38](https://github.com/polkadot-js/common/blob/db61ea30/packages/keyring/src/keyring.ts#L38)*

## Accessors

###  pairs

• **get pairs**(): *[KeyringPair](../interfaces/_packages_keyring_src_types_.keyringpair.md)[]*

*Defined in [packages/keyring/src/keyring.ts:53](https://github.com/polkadot-js/common/blob/db61ea30/packages/keyring/src/keyring.ts#L53)*

**`description`** retrieve the pairs (alias for getPairs)

**Returns:** *[KeyringPair](../interfaces/_packages_keyring_src_types_.keyringpair.md)[]*

___

###  publicKeys

• **get publicKeys**(): *Uint8Array[]*

*Defined in [packages/keyring/src/keyring.ts:60](https://github.com/polkadot-js/common/blob/db61ea30/packages/keyring/src/keyring.ts#L60)*

**`description`** retrieve the publicKeys (alias for getPublicKeys)

**Returns:** *Uint8Array[]*

___

###  type

• **get type**(): *KeypairType*

*Defined in [packages/keyring/src/keyring.ts:67](https://github.com/polkadot-js/common/blob/db61ea30/packages/keyring/src/keyring.ts#L67)*

**`description`** Returns the type of the keyring, ed25519, sr25519 or ecdsa

**Returns:** *KeypairType*

## Methods

###  addFromAddress

▸ **addFromAddress**(`address`: string | Uint8Array, `meta`: [KeyringPair$Meta](../modules/_packages_keyring_src_types_.md#keyringpairmeta), `encoded`: Uint8Array | null, `type`: KeypairType, `ignoreChecksum?`: undefined | false | true, `encType?`: [KeyringPair$JsonEncodingTypes](../modules/_packages_keyring_src_types_.md#keyringpairjsonencodingtypes)[]): *[KeyringPair](../interfaces/_packages_keyring_src_types_.keyringpair.md)*

*Defined in [packages/keyring/src/keyring.ts:87](https://github.com/polkadot-js/common/blob/db61ea30/packages/keyring/src/keyring.ts#L87)*

**`name`** addFromAddress

**`summary`** Stores an account, given an account address, as a Key/Value (public key, pair) in Keyring Pair Dictionary

**`description`** Allows user to explicitely provide separate inputs including account address or public key, and optionally
the associated account metadata, and the default encoded value as arguments (that may be obtained from the json file
of an account backup), and then generates a keyring pair from them that it passes to
`addPair` to stores in a keyring pair dictionary the public key of the generated pair as a key and the pair as the associated value.

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`address` | string &#124; Uint8Array | - |
`meta` | [KeyringPair$Meta](../modules/_packages_keyring_src_types_.md#keyringpairmeta) | {} |
`encoded` | Uint8Array &#124; null | null |
`type` | KeypairType | this.type |
`ignoreChecksum?` | undefined &#124; false &#124; true | - |
`encType?` | [KeyringPair$JsonEncodingTypes](../modules/_packages_keyring_src_types_.md#keyringpairjsonencodingtypes)[] | - |

**Returns:** *[KeyringPair](../interfaces/_packages_keyring_src_types_.keyringpair.md)*

___

###  addFromJson

▸ **addFromJson**(`__namedParameters`: object, `ignoreChecksum?`: undefined | false | true): *[KeyringPair](../interfaces/_packages_keyring_src_types_.keyringpair.md)*

*Defined in [packages/keyring/src/keyring.ts:100](https://github.com/polkadot-js/common/blob/db61ea30/packages/keyring/src/keyring.ts#L100)*

**`name`** addFromJson

**`summary`** Stores an account, given JSON data, as a Key/Value (public key, pair) in Keyring Pair Dictionary

**`description`** Allows user to provide a json object argument that contains account information (that may be obtained from the json file
of an account backup), and then generates a keyring pair from it that it passes to
`addPair` to stores in a keyring pair dictionary the public key of the generated pair as a key and the pair as the associated value.

**Parameters:**

▪ **__namedParameters**: *object*

Name | Type |
------ | ------ |
`address` | string |
`encoded` | string |
`encoding` | object |
`meta` | object |

▪`Optional`  **ignoreChecksum**: *undefined | false | true*

**Returns:** *[KeyringPair](../interfaces/_packages_keyring_src_types_.keyringpair.md)*

___

###  addFromMnemonic

▸ **addFromMnemonic**(`mnemonic`: string, `meta`: [KeyringPair$Meta](../modules/_packages_keyring_src_types_.md#keyringpairmeta), `type`: KeypairType): *[KeyringPair](../interfaces/_packages_keyring_src_types_.keyringpair.md)*

*Implementation of [KeyringInstance](../interfaces/_packages_keyring_src_types_.keyringinstance.md)*

*Defined in [packages/keyring/src/keyring.ts:119](https://github.com/polkadot-js/common/blob/db61ea30/packages/keyring/src/keyring.ts#L119)*

**`name`** addFromMnemonic

**`summary`** Stores an account, given a mnemonic, as a Key/Value (public key, pair) in Keyring Pair Dictionary

**`description`** Allows user to provide a mnemonic (seed phrase that is provided when account is originally created)
argument and a metadata argument that contains account information (that may be obtained from the json file
of an account backup), and then generates a keyring pair from it that it passes to
`addPair` to stores in a keyring pair dictionary the public key of the generated pair as a key and the pair as the associated value.

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`mnemonic` | string | - |
`meta` | [KeyringPair$Meta](../modules/_packages_keyring_src_types_.md#keyringpairmeta) | {} |
`type` | KeypairType | this.type |

**Returns:** *[KeyringPair](../interfaces/_packages_keyring_src_types_.keyringpair.md)*

___

###  addFromSeed

▸ **addFromSeed**(`seed`: Uint8Array, `meta`: [KeyringPair$Meta](../modules/_packages_keyring_src_types_.md#keyringpairmeta), `type`: KeypairType): *[KeyringPair](../interfaces/_packages_keyring_src_types_.keyringpair.md)*

*Implementation of [KeyringInstance](../interfaces/_packages_keyring_src_types_.keyringinstance.md)*

*Defined in [packages/keyring/src/keyring.ts:130](https://github.com/polkadot-js/common/blob/db61ea30/packages/keyring/src/keyring.ts#L130)*

**`name`** addFromSeed

**`summary`** Stores an account, given seed data, as a Key/Value (public key, pair) in Keyring Pair Dictionary

**`description`** Stores in a keyring pair dictionary the public key of the pair as a key and the pair as the associated value.
Allows user to provide the account seed as an argument, and then generates a keyring pair from it that it passes to
`addPair` to store in a keyring pair dictionary the public key of the generated pair as a key and the pair as the associated value.

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`seed` | Uint8Array | - |
`meta` | [KeyringPair$Meta](../modules/_packages_keyring_src_types_.md#keyringpairmeta) | {} |
`type` | KeypairType | this.type |

**Returns:** *[KeyringPair](../interfaces/_packages_keyring_src_types_.keyringpair.md)*

___

###  addFromUri

▸ **addFromUri**(`suri`: string, `meta`: [KeyringPair$Meta](../modules/_packages_keyring_src_types_.md#keyringpairmeta), `type`: KeypairType): *[KeyringPair](../interfaces/_packages_keyring_src_types_.keyringpair.md)*

*Implementation of [KeyringInstance](../interfaces/_packages_keyring_src_types_.keyringinstance.md)*

*Defined in [packages/keyring/src/keyring.ts:145](https://github.com/polkadot-js/common/blob/db61ea30/packages/keyring/src/keyring.ts#L145)*

**`name`** addFromUri

**`summary`** Creates an account via an suri

**`description`** Extracts the phrase, path and password from a SURI format for specifying secret keys `<secret>/<soft-key>//<hard-key>///<password>` (the `///password` may be omitted, and `/<soft-key>` and `//<hard-key>` maybe repeated and mixed). The secret can be a hex string, mnemonic phrase or a string (to be padded)

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`suri` | string | - |
`meta` | [KeyringPair$Meta](../modules/_packages_keyring_src_types_.md#keyringpairmeta) | {} |
`type` | KeypairType | this.type |

**Returns:** *[KeyringPair](../interfaces/_packages_keyring_src_types_.keyringpair.md)*

___

###  addPair

▸ **addPair**(`pair`: [KeyringPair](../interfaces/_packages_keyring_src_types_.keyringpair.md)): *[KeyringPair](../interfaces/_packages_keyring_src_types_.keyringpair.md)*

*Implementation of [KeyringInstance](../interfaces/_packages_keyring_src_types_.keyringinstance.md)*

*Defined in [packages/keyring/src/keyring.ts:75](https://github.com/polkadot-js/common/blob/db61ea30/packages/keyring/src/keyring.ts#L75)*

**`name`** addPair

**`summary`** Stores an account, given a keyring pair, as a Key/Value (public key, pair) in Keyring Pair Dictionary

**Parameters:**

Name | Type |
------ | ------ |
`pair` | [KeyringPair](../interfaces/_packages_keyring_src_types_.keyringpair.md) |

**Returns:** *[KeyringPair](../interfaces/_packages_keyring_src_types_.keyringpair.md)*

___

###  createFromUri

▸ **createFromUri**(`_suri`: string, `meta`: [KeyringPair$Meta](../modules/_packages_keyring_src_types_.md#keyringpairmeta), `type`: KeypairType): *[KeyringPair](../interfaces/_packages_keyring_src_types_.keyringpair.md)*

*Implementation of [KeyringInstance](../interfaces/_packages_keyring_src_types_.keyringinstance.md)*

*Defined in [packages/keyring/src/keyring.ts:156](https://github.com/polkadot-js/common/blob/db61ea30/packages/keyring/src/keyring.ts#L156)*

**`name`** createFromUri

**`summary`** Creates a Keypair from an suri

**`description`** This creates a pair from the suri, but does not add it to the keyring

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`_suri` | string | - |
`meta` | [KeyringPair$Meta](../modules/_packages_keyring_src_types_.md#keyringpairmeta) | {} |
`type` | KeypairType | this.type |

**Returns:** *[KeyringPair](../interfaces/_packages_keyring_src_types_.keyringpair.md)*

___

###  encodeAddress

▸ **encodeAddress**(`address`: Uint8Array | string, `ss58Format?`: undefined | number): *string*

*Defined in [packages/keyring/src/keyring.ts:197](https://github.com/polkadot-js/common/blob/db61ea30/packages/keyring/src/keyring.ts#L197)*

**`name`** encodeAddress

**`description`** Encodes the input into an ss58 representation

**Parameters:**

Name | Type |
------ | ------ |
`address` | Uint8Array &#124; string |
`ss58Format?` | undefined &#124; number |

**Returns:** *string*

___

###  getPair

▸ **getPair**(`address`: string | Uint8Array): *[KeyringPair](../interfaces/_packages_keyring_src_types_.keyringpair.md)*

*Implementation of [KeyringInstance](../interfaces/_packages_keyring_src_types_.keyringinstance.md)*

*Defined in [packages/keyring/src/keyring.ts:207](https://github.com/polkadot-js/common/blob/db61ea30/packages/keyring/src/keyring.ts#L207)*

**`name`** getPair

**`summary`** Retrieves an account keyring pair from the Keyring Pair Dictionary, given an account address

**`description`** Returns a keyring pair value from the keyring pair dictionary by performing
a key lookup using the provided account address or public key (after decoding it).

**Parameters:**

Name | Type |
------ | ------ |
`address` | string &#124; Uint8Array |

**Returns:** *[KeyringPair](../interfaces/_packages_keyring_src_types_.keyringpair.md)*

___

###  getPairs

▸ **getPairs**(): *[KeyringPair](../interfaces/_packages_keyring_src_types_.keyringpair.md)[]*

*Implementation of [KeyringInstance](../interfaces/_packages_keyring_src_types_.keyringinstance.md)*

*Defined in [packages/keyring/src/keyring.ts:216](https://github.com/polkadot-js/common/blob/db61ea30/packages/keyring/src/keyring.ts#L216)*

**`name`** getPairs

**`summary`** Retrieves all account keyring pairs from the Keyring Pair Dictionary

**`description`** Returns an array list of all the keyring pair values that are stored in the keyring pair dictionary.

**Returns:** *[KeyringPair](../interfaces/_packages_keyring_src_types_.keyringpair.md)[]*

___

###  getPublicKeys

▸ **getPublicKeys**(): *Uint8Array[]*

*Implementation of [KeyringInstance](../interfaces/_packages_keyring_src_types_.keyringinstance.md)*

*Defined in [packages/keyring/src/keyring.ts:225](https://github.com/polkadot-js/common/blob/db61ea30/packages/keyring/src/keyring.ts#L225)*

**`name`** getPublicKeys

**`summary`** Retrieves Public Keys of all Keyring Pairs stored in the Keyring Pair Dictionary

**`description`** Returns an array list of all the public keys associated with each of the keyring pair values that are stored in the keyring pair dictionary.

**Returns:** *Uint8Array[]*

___

###  removePair

▸ **removePair**(`address`: string | Uint8Array): *void*

*Implementation of [KeyringInstance](../interfaces/_packages_keyring_src_types_.keyringinstance.md)*

*Defined in [packages/keyring/src/keyring.ts:237](https://github.com/polkadot-js/common/blob/db61ea30/packages/keyring/src/keyring.ts#L237)*

**`name`** removePair

**`description`** Deletes the provided input address or public key from the stored Keyring Pair Dictionary.

**Parameters:**

Name | Type |
------ | ------ |
`address` | string &#124; Uint8Array |

**Returns:** *void*

___

###  setSS58Format

▸ **setSS58Format**(`ss58`: number): *void*

*Defined in [packages/keyring/src/keyring.ts:245](https://github.com/polkadot-js/common/blob/db61ea30/packages/keyring/src/keyring.ts#L245)*

**`name`** setSS58Format;

**`description`** Sets the ss58 format for the keyring

**Parameters:**

Name | Type |
------ | ------ |
`ss58` | number |

**Returns:** *void*

___

###  toJson

▸ **toJson**(`address`: string | Uint8Array, `passphrase?`: undefined | string): *[KeyringPair$Json](../interfaces/_packages_keyring_src_types_.keyringpair_json.md)*

*Implementation of [KeyringInstance](../interfaces/_packages_keyring_src_types_.keyringinstance.md)*

*Defined in [packages/keyring/src/keyring.ts:257](https://github.com/polkadot-js/common/blob/db61ea30/packages/keyring/src/keyring.ts#L257)*

**`name`** toJson

**`summary`** Returns a JSON object associated with the input argument that contains metadata assocated with an account

**`description`** Returns a JSON object containing the metadata associated with an account
when valid address or public key and when the account passphrase is provided if the account secret
is not already unlocked and available in memory. Note that in [Polkadot-JS Apps](https://github.com/polkadot-js/apps) the user
may backup their account to a JSON file that contains this information.

**Parameters:**

Name | Type |
------ | ------ |
`address` | string &#124; Uint8Array |
`passphrase?` | undefined &#124; string |

**Returns:** *[KeyringPair$Json](../interfaces/_packages_keyring_src_types_.keyringpair_json.md)*
