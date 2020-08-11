[Polkadot JS Common](../README.md) › [Globals](../globals.md) › ["packages/util/src/is/error"](_packages_util_src_is_error_.md)

# Module: "packages/util/src/is/error"

## Index

### Functions

* [isError](_packages_util_src_is_error_.md#iserror)

## Functions

###  isError

▸ **isError**(`value`: unknown): *value is Error*

*Defined in [packages/util/src/is/error.ts:21](https://github.com/polkadot-js/common/blob/e487d0a4/packages/util/src/is/error.ts#L21)*

**`name`** isError

**`summary`** Tests for a `Error` object instance.

**`description`** 
Checks to see if the input object is an instance of `Error`.

**`example`** 
<BR>

```javascript
import { isError } from '@polkadot/util';

console.log('isError', isError(new Error('message'))); // => true
```

**Parameters:**

Name | Type |
------ | ------ |
`value` | unknown |

**Returns:** *value is Error*
