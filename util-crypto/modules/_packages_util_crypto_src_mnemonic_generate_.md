[Polkadot JS Common](../README.md) › [Globals](../globals.md) › ["packages/util-crypto/src/mnemonic/generate"](_packages_util_crypto_src_mnemonic_generate_.md)

# Module: "packages/util-crypto/src/mnemonic/generate"

## Index

### Type aliases

* [WordCount](_packages_util_crypto_src_mnemonic_generate_.md#wordcount)

### Functions

* [mnemonicGenerate](_packages_util_crypto_src_mnemonic_generate_.md#mnemonicgenerate)

## Type aliases

###  WordCount

Ƭ **WordCount**: *12 | 15 | 18 | 21 | 24*

*Defined in [packages/util-crypto/src/mnemonic/generate.ts:10](https://github.com/polkadot-js/common/blob/64510af8/packages/util-crypto/src/mnemonic/generate.ts#L10)*

## Functions

###  mnemonicGenerate

▸ **mnemonicGenerate**(`numWords`: [WordCount](_packages_util_crypto_src_mnemonic_generate_.md#wordcount)): *string*

*Defined in [packages/util-crypto/src/mnemonic/generate.ts:33](https://github.com/polkadot-js/common/blob/64510af8/packages/util-crypto/src/mnemonic/generate.ts#L33)*

**`name`** mnemonicGenerate

**`summary`** Creates a valid mnemonic string using using [BIP39](https://github.com/bitcoin/bips/blob/master/bip-0039.mediawiki).

**`example`** 
<BR>

```javascript
import { mnemonicGenerate } from '@polkadot/util-crypto';

const mnemonic = mnemonicGenerate(); // => string
```

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`numWords` | [WordCount](_packages_util_crypto_src_mnemonic_generate_.md#wordcount) | 12 |

**Returns:** *string*
