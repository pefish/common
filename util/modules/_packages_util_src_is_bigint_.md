[Polkadot JS Common](../README.md) › [Globals](../globals.md) › ["packages/util/src/is/bigInt"](_packages_util_src_is_bigint_.md)

# Module: "packages/util/src/is/bigInt"

## Index

### Functions

* [isBigInt](_packages_util_src_is_bigint_.md#isbigint)

## Functions

###  isBigInt

▸ **isBigInt**(`value`: unknown): *value is BigInt*

*Defined in [packages/util/src/is/bigInt.ts:19](https://github.com/polkadot-js/common/blob/0d03eac3/packages/util/src/is/bigInt.ts#L19)*

**`name`** isBigInt

**`summary`** Tests for a `BigInt` object instance.

**`description`** 
Checks to see if the input object is an instance of `BigInt`

**`example`** 
<BR>

```javascript
import { isBigInt } from '@polkadot/util';

console.log('isBigInt', isBigInt(123_456n)); // => true
```

**Parameters:**

Name | Type |
------ | ------ |
`value` | unknown |

**Returns:** *value is BigInt*
