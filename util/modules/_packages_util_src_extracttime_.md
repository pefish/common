[Polkadot JS Common](../README.md) › [Globals](../globals.md) › ["packages/util/src/extractTime"](_packages_util_src_extracttime_.md)

# Module: "packages/util/src/extractTime"

## Index

### Functions

* [extractTime](_packages_util_src_extracttime_.md#extracttime)

## Functions

###  extractTime

▸ **extractTime**(`milliseconds?`: undefined | number): *[Time](../interfaces/_packages_util_src_types_.time.md)*

*Defined in [packages/util/src/extractTime.ts:39](https://github.com/polkadot-js/common/blob/e845132d/packages/util/src/extractTime.ts#L39)*

**`name`** extractTime

**`summary`** Convert a quantity of seconds to Time array representing accumulated {days, minutes, hours, seconds, milliseconds}

**`example`** 
<BR>

```javascript
import { extractTime } from '@polkadot/util';

const { days, minutes, hours, seconds, milliseconds } = extractTime(6000); // 0, 0, 10, 0, 0
```

**Parameters:**

Name | Type |
------ | ------ |
`milliseconds?` | undefined &#124; number |

**Returns:** *[Time](../interfaces/_packages_util_src_types_.time.md)*
