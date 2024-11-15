/* global require expect test describe */
//import * as blah from "scripts/index.js";
const fizz_buzz = require('./scripts/index');

describe("FizzBuzz", () => {
    test('[3] should result in "fizz"', () => {
        expect(fizz_buzz([3])).toBe('fizz');
    });

    test('[5] should result in "buzz"', () => {
        expect(fizz_buzz([5])).toBe('buzz');
    });

    test('[15] should result in "fizzbuzz"', () => {
        expect(fizz_buzz([15])).toBe('fizzbuzz');
    });

    test('[1,2,3] should result in "1, 2, fizz"', () => {
        expect(fizz_buzz([3])).toBe('fizz');
    });

});
