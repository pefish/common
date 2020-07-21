[Polkadot JS Common](../README.md) › [Globals](../globals.md) › ["packages/util/src/is/childClass"](_packages_util_src_is_childclass_.md)

# Module: "packages/util/src/is/childClass"

## Index

### Functions

* [isChildClass](_packages_util_src_is_childclass_.md#ischildclass)

## Functions

###  isChildClass

▸ **isChildClass**‹**P**›(`Parent`: P, `Child?`: [Constructor](../interfaces/_packages_util_src_types_.constructor.md) | null | unknown): *Child is P*

*Defined in [packages/util/src/is/childClass.ts:22](https://github.com/polkadot-js/common/blob/0a6bd414/packages/util/src/is/childClass.ts#L22)*

**`name`** isChildClass

**`summary`** Tests if the child extends the parent Class

**`description`** 
Checks to see if the child Class extends the parent Class

**`example`** 
<BR>

```javascript
import { isChildClass } from '@polkadot/util';

console.log('isChildClass', isChildClass(BN, BN); // => true
console.log('isChildClass', isChildClass(BN, Uint8Array); // => false
```

**Type parameters:**

▪ **P**: *[Constructor](../interfaces/_packages_util_src_types_.constructor.md)*

**Parameters:**

Name | Type |
------ | ------ |
`Parent` | P |
`Child?` | [Constructor](../interfaces/_packages_util_src_types_.constructor.md) &#124; null &#124; unknown |

**Returns:** *Child is P*
