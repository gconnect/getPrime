var chai = require('chai');
var expect = chai.expect;
var getPrime = require('../app/getPrimes.js');

describe("Get Prime tests ", function() {

 it("should return [2, 3, 5, 7] for prime number from 0 to n", function() {
   expect(getPrime(10)).to.be.eql([2, 3, 5, 7]);
 });
 it("should return [2, 3, 5, 7, 11, 13, 17, 19, 23, 29] for prime number from 0 to n", function() {
   expect(getPrime(30)).to.be.eql([2, 3, 5, 7, 11, 13, 17, 19, 23, 29]);
 });
})