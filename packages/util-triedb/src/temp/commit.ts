// Copyright 2017-2018 @polkadot/util-triedb authors & contributors
// This software may be modified and distributed under the terms
// of the ISC license. See the LICENSE file for details.

import { Trie$Pairs } from '@polkadot/trie-hash/types';
import { Temp$Storage } from './types';

import del from './del';
import set from './set';

export default function commit (storage: Temp$Storage, values: Trie$Pairs): void {
  values.forEach(({ k, v }) => {
    if (v && v.length) {
      set(storage, k, v);
    } else {
      del(storage, k);
    }
  });
}
