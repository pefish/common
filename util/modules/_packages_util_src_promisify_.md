[Polkadot JS Common](../README.md) › [Globals](../globals.md) › ["packages/util/src/promisify"](_packages_util_src_promisify_.md)

# Module: "packages/util/src/promisify"

## Index

### Functions

* [promisify](_packages_util_src_promisify_.md#promisify)

## Functions

###  promisify

▸ **promisify**‹**R**›(`self`: unknown, `fn`: function, ...`params`: any[]): *Promise‹R›*

*Defined in [packages/util/src/promisify.ts:21](https://github.com/polkadot-js/common/blob/db61ea30/packages/util/src/promisify.ts#L21)*

**`name`** promisify

**`summary`** Wraps an async callback into a `Promise`

**`description`** 
Wraps the supplied async function `fn` that has a standard JS callback `(error: Error, result: any)` into a `Promise`, passing the supplied parameters. When `error` is set, the Promise is rejected, else the Promise resolves with the `result` value.

**`example`** 
<BR>

```javascript
const { promisify } from '@polkadot/util';

await promisify(null, ((a, cb) => cb(null, a), true); // resolves with `true`
await promisify(null, (cb) => cb(new Error('error!'))); // rejects with `error!`
```

**Type parameters:**

▪ **R**

**Parameters:**

▪ **self**: *unknown*

▪ **fn**: *function*

▸ (...`params`: any): *any*

**Parameters:**

Name | Type |
------ | ------ |
`...params` | any |

▪... **params**: *any[]*

**Returns:** *Promise‹R›*
