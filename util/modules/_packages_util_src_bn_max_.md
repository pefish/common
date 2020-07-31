[Polkadot JS Common](../README.md) › [Globals](../globals.md) › ["packages/util/src/bn/max"](_packages_util_src_bn_max_.md)

# Module: "packages/util/src/bn/max"

## Index

### Functions

* [max](_packages_util_src_bn_max_.md#max)

## Functions

###  max

▸ **max**(...`items`: BN[]): *BN*

*Defined in [packages/util/src/bn/max.ts:22](https://github.com/polkadot-js/common/blob/a0251ff6/packages/util/src/bn/max.ts#L22)*

**`name`** bnMax

**`summary`** Finds and returns the highest value in an array of BNs.

**`example`** 
<BR>

```javascript
import BN from 'bn.js';
import { bnMax } from '@polkadot/util';

bnMax([new BN(1), new BN(3), new BN(2)]).toString(); // => '3'
```

**Parameters:**

Name | Type |
------ | ------ |
`...items` | BN[] |

**Returns:** *BN*
