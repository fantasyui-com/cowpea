#!/usr/bin/env -S node --experimental-modules

import assert from 'assert';
import cowpea from './index.mjs';

async function main() {
  {
    let found = await cowpea.find('frozen', 'aged');
    if(found.length){
      found.map(i=>console.log(i.description))
    }
  }
  {
    let found = (await cowpea.find('frozen', 'aged')).pop();
    assert.deepStrictEqual(found.swap, [ 'cold', 'old' ]);
  }
}

main();
