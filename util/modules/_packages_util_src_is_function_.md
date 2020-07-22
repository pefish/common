[Polkadot JS Common](../README.md) › [Globals](../globals.md) › ["packages/util/src/is/function"](_packages_util_src_is_function_.md)

# Module: "packages/util/src/is/function"

## Index

### Functions

* [isFunction](_packages_util_src_is_function_.md#isfunction)

## Functions

###  isFunction

▸ **isFunction**(`value`: unknown): *value is FnType*

*Defined in [packages/util/src/is/function.ts:22](https://github.com/polkadot-js/common/blob/91340577/packages/util/src/is/function.ts#L22)*

**`name`** isFunction

**`summary`** Tests for a `function`.

**`description`** 
Checks to see if the input value is a JavaScript function.

**`example`** 
<BR>

```javascript
import { isFunction } from '@polkadot/util';

isFunction(() => false); // => true
```

**Parameters:**

Name | Type |
------ | ------ |
`value` | unknown |

**Returns:** *value is FnType*
