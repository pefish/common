[Polkadot JS Common](../README.md) › [Globals](../globals.md) › ["packages/util/src/string/shorten"](_packages_util_src_string_shorten_.md)

# Module: "packages/util/src/string/shorten"

## Index

### Functions

* [stringShorten](_packages_util_src_string_shorten_.md#stringshorten)

## Functions

###  stringShorten

▸ **stringShorten**(`value`: string, `prefixLength`: number): *string*

*Defined in [packages/util/src/string/shorten.ts:20](https://github.com/polkadot-js/common/blob/91340577/packages/util/src/string/shorten.ts#L20)*

**`name`** stringShorten

**`summary`** Returns a string with maximum length

**`description`** 
Checks the string against the `prefixLength`, if longer than double this, shortens it by placing `..` in the middle of it

**`example`** 
<BR>

```javascript
import { stringShorten } from '@polkadot/util';

stringShorten('1234567890', 2); // => 12..90
```

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`value` | string | - |
`prefixLength` | number | 6 |

**Returns:** *string*
