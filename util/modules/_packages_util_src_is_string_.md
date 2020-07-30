[Polkadot JS Common](../README.md) › [Globals](../globals.md) › ["packages/util/src/is/string"](_packages_util_src_is_string_.md)

# Module: "packages/util/src/is/string"

## Index

### Functions

* [isString](_packages_util_src_is_string_.md#isstring)

## Functions

###  isString

▸ **isString**(`value`: unknown): *value is string | String*

*Defined in [packages/util/src/is/string.ts:20](https://github.com/polkadot-js/common/blob/e845132d/packages/util/src/is/string.ts#L20)*

**`name`** isString

**`summary`** Tests for a string.

**`description`** 
Checks to see if the input value is a JavaScript string.

**`example`** 
<BR>

```javascript
import { isString } from '@polkadot/util';

console.log('isString', isString('test')); // => true
```

**Parameters:**

Name | Type |
------ | ------ |
`value` | unknown |

**Returns:** *value is string | String*
