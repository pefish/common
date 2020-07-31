[Polkadot JS Common](../README.md) › [Globals](../globals.md) › ["packages/util/src/number/toU8a"](_packages_util_src_number_tou8a_.md)

# Module: "packages/util/src/number/toU8a"

## Index

### Functions

* [numberToU8a](_packages_util_src_number_tou8a_.md#numbertou8a)

## Functions

###  numberToU8a

▸ **numberToU8a**(`value?`: number | null, `bitLength`: number): *Uint8Array*

*Defined in [packages/util/src/number/toU8a.ts:24](https://github.com/polkadot-js/common/blob/a0251ff6/packages/util/src/number/toU8a.ts#L24)*

**`name`** numberToU8a

**`summary`** Creates a Uint8Array object from a number.

**`description`** 
`null`/`undefined`/`NaN` inputs returns an empty `Uint8Array` result. `number` input values return the actual bytes value converted to a `Uint8Array`. With `bitLength`, it converts the value to the equivalent size.

**`example`** 
<BR>

```javascript
import { numberToU8a } from '@polkadot/util';

numberToU8a(0x1234); // => [0x12, 0x34]
```

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`value?` | number &#124; null | - |
`bitLength` | number | -1 |

**Returns:** *Uint8Array*
