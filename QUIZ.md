# async pop quiz

Created a tested module function called "take-five". The `takeFive` function is asynchronous, 
when invoked with a callback, it will call the callback after 5 seconds.

Things to know:
* Because there is only one test, you can use a single `it` without describe.
* Mocha has a default 2 second (2000ms) timeout. You can increase it using:

```js
it('takes five', done => {
     // test goes here
}).timeout(7000);
```

* `setTimeout` is a built in JavaScript function. 
Because it began life in the browser, it doesn't quite follow the node conventions for 
async functions. It looks like `setTimeout(callback, timeoutInMilliseconds)` and is 
typically used like:

```js
setTimeout(() => {

}, 5000);
```

* To calculate an elapsed time you can use `const start = new Date()` and then to end the time use
`const elapsed = new Date() - start;`. Result will be in milliseconds. Be aware the time won't be exactly 
5000 ms, so you can test like: `seconds > 5000 && seconds < 6000`
