[Polkadot JS Common](../README.md) › [Globals](../globals.md) › ["packages/util-crypto/src/key/extractSuri"](_packages_util_crypto_src_key_extractsuri_.md)

# Module: "packages/util-crypto/src/key/extractSuri"

## Index

### Interfaces

* [ExtractResult](../interfaces/_packages_util_crypto_src_key_extractsuri_.extractresult.md)

### Functions

* [keyExtract](_packages_util_crypto_src_key_extractsuri_.md#keyextract)

## Functions

###  keyExtract

▸ **keyExtract**(`suri`: string): *[ExtractResult](../interfaces/_packages_util_crypto_src_key_extractsuri_.extractresult.md)*

*Defined in [packages/util-crypto/src/key/extractSuri.ts:21](https://github.com/polkadot-js/common/blob/db61ea30/packages/util-crypto/src/key/extractSuri.ts#L21)*

**`description`** Extracts the phrase, path and password from a SURI format for specifying secret keys `<secret>/<soft-key>//<hard-key>///<password>` (the `///password` may be omitted, and `/<soft-key>` and `//<hard-key>` maybe repeated and mixed).

**Parameters:**

Name | Type |
------ | ------ |
`suri` | string |

**Returns:** *[ExtractResult](../interfaces/_packages_util_crypto_src_key_extractsuri_.extractresult.md)*
