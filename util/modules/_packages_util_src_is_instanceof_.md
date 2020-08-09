[Polkadot JS Common](../README.md) › [Globals](../globals.md) › ["packages/util/src/is/instanceOf"](_packages_util_src_is_instanceof_.md)

# Module: "packages/util/src/is/instanceOf"

## Index

### Functions

* [isInstanceOf](_packages_util_src_is_instanceof_.md#isinstanceof)

## Functions

###  isInstanceOf

▸ **isInstanceOf**(`value`: unknown, `clazz`: Function): *boolean*

*Defined in [packages/util/src/is/instanceOf.ts:20](https://github.com/polkadot-js/common/blob/0d03eac3/packages/util/src/is/instanceOf.ts#L20)*

**`name`** isInstanceOf

**`summary`** Tests for a instance of a class.

**`description`** 
Checks to see if the input value is an instance of the test class.

**`example`** 
<BR>

```javascript
import { isInstanceOf } from '@polkadot/util';

console.log('isInstanceOf', isInstanceOf(new Array(0), Array)); // => true
```

**Parameters:**

Name | Type |
------ | ------ |
`value` | unknown |
`clazz` | Function |

**Returns:** *boolean*
