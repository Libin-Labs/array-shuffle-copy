import * as api from '@lp-labs/array-shuffle-copy';
import { shuffled } from '@lp-labs/array-shuffle-copy';
console.log(shuffled([1, 2, 3]));
// @ts-expect-error invalid argument must be rejected by declarations
api.shuffled('items');
