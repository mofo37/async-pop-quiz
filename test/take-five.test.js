const assert = require('assert');
const takeFive = require('../take-five');
const start = new Date();
const elapsed = new Date() - start;

describe ('take five', () => {
  it('calls callback after 5 seconds', done => {
    const time = elapsed > 7000 && elapsed < 8000;
    assert.equal(time, );
  }).timeout(7000);
}

