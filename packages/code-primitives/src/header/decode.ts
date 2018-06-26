// Copyright 2017-2018 @polkadot/primitives-codec authors & contributors
// This software may be modified and distributed under the terms
// of the ISC license. See the LICENSE file for details.

import { Header } from '@polkadot/primitives/header';

import createHeader from '@polkadot/primitives-builder/header';

import decodeRaw from './decodeRaw';
import { OFF_PARENT_HASH, OFF_STATE_ROOT, OFF_TX_ROOT } from './offsets';

export default function decodeHeader (u8a: Uint8Array): Header {
  const { number, logs } = decodeRaw(u8a);

  return createHeader({
    digest: {
      logs
    },
    extrinsicsRoot: u8a.subarray(OFF_TX_ROOT, OFF_TX_ROOT + 32),
    number,
    parentHash: u8a.subarray(OFF_PARENT_HASH, OFF_PARENT_HASH + 32),
    stateRoot: u8a.subarray(OFF_STATE_ROOT, OFF_STATE_ROOT + 32)
  });
}
