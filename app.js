//JAVASCRIPT - Promises, Async/await

//Create a first function (which takes argument `data`) that always returns a promise and:
//1.If data is not a number, the function returns a promise rejected instantly and give the word "error" (in a string
//2.If data is an odd number, return a promise resolved 1 second later and give "odd" (in a string
//3.If data is an even number, return a promise rejected 2 seconds later and give "even" (in a string
import {runPromise} from './PromiseApp.js';

runPromise(5);
runPromise(8);
runPromise('String');

//5. Write same tasks(1-4) using async/await
import {runAsync} from './AsyncApp.js';

runAsync(555);
runAsync(888);
runAsync('Eleks');