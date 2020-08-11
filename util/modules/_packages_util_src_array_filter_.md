[Polkadot JS Common](../README.md) › [Globals](../globals.md) › ["packages/util/src/array/filter"](_packages_util_src_array_filter_.md)

# Module: "packages/util/src/array/filter"

## Index

### Functions

* [arrayFilter](_packages_util_src_array_filter_.md#arrayfilter)

## Functions

###  arrayFilter

▸ **arrayFilter**‹**T**›(`array`: T[], `allowNulls`: boolean): *T[]*

*Defined in [packages/util/src/array/filter.ts:24](https://github.com/polkadot-js/common/blob/61b57687/packages/util/src/array/filter.ts#L24)*

**`name`** arrayFilter

**`summary`** Filters undefined and (optionally) null values from an array

**`description`** 
Returns a new array with all `undefined` values removed. Optionally, when `allowNulls = false`, it removes the `null` values as well

**`example`** 
<BR>

```javascript
import { arrayFilter } from '@polkadot/util';

arrayFilter([0, void 0, true, null, false, '']); // [0, true, null, false, '']
arrayFilter([0, void 0, true, null, false, ''], false); // [0, true, false, '']
```

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`array` | T[] | - |
`allowNulls` | boolean | true |

**Returns:** *T[]*
