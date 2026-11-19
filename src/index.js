import { sleep } from "./async-utils.js";

console.log('start');

await sleep(100);

console.log('done after 100ms');
