[Polkadot JS Common](../README.md) › [Globals](../globals.md) › ["packages/util/src/assert"](_packages_util_src_assert_.md)

# Module: "packages/util/src/assert"

## Index

### Functions

* [assert](_packages_util_src_assert_.md#assert)

## Functions

###  assert

▸ **assert**(`condition`: unknown, `message`: string | MessageFn): *asserts condition*

*Defined in [packages/util/src/assert.ts:25](https://github.com/polkadot-js/common/blob/08817d19/packages/util/src/assert.ts#L25)*

**`name`** assert

**`summary`** Checks for a valid test, if not Error is thrown.

**`description`** 
Checks that `test` is a truthy value. If value is falsy (`null`, `undefined`, `false`, ...), it throws an Error with the supplied `message`. When `test` passes, `true` is returned.

**`example`** 
<BR>

```javascript
const { assert } from '@polkadot/util';

assert(true, 'True should be true'); // passes
assert(false, 'False should not be true'); // Error thrown
assert(false, () => 'message'); // Error with 'message'
```

**Parameters:**

Name | Type |
------ | ------ |
`condition` | unknown |
`message` | string &#124; MessageFn |

**Returns:** *asserts condition*
