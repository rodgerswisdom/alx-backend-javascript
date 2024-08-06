// import getFullResponseFromAPI from './1-promise';

// console.log(getFullResponseFromAPI(true));
// console.log(getFullResponseFromAPI(false));

import handleResponseFromAPI from "./2-then";

const promise = Promise.resolve();
handleResponseFromAPI(promise);