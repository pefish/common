[Polkadot JS Common](../README.md) › [Globals](../globals.md) › ["packages/util/src/bn/toBn"](_packages_util_src_bn_tobn_.md)

# Module: "packages/util/src/bn/toBn"

## Index

### Functions

* [bnToBn](_packages_util_src_bn_tobn_.md#bntobn)

## Functions

###  bnToBn

▸ **bnToBn**‹**ExtToBn**›(`value?`: ExtToBn | BN | BigInt | string | number | null): *BN*

*Defined in [packages/util/src/bn/toBn.ts:30](https://github.com/polkadot-js/common/blob/91340577/packages/util/src/bn/toBn.ts#L30)*

**`name`** bnToBn

**`summary`** Creates a BN value from a BN, BigInt, string (base 10 or hex) or number input.

**`description`** 
`null` inputs returns a `0x0` result, BN values returns the value, numbers returns a BN representation.

**`example`** 
<BR>

```javascript
import BN from 'bn.js';
import { bnToBn } from '@polkadot/util';

bnToBn(0x1234); // => BN(0x1234)
bnToBn(new BN(0x1234)); // => BN(0x1234)
```

**Type parameters:**

▪ **ExtToBn**: *[ToBn](../interfaces/_packages_util_src_types_.tobn.md)*

**Parameters:**

Name | Type |
------ | ------ |
`value?` | ExtToBn &#124; BN &#124; BigInt &#124; string &#124; number &#124; null |

**Returns:** *BN*