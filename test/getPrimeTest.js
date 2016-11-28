
'use strict'

var chai = require('chai');
var assert = chai.assert;

var myApp = require('../app/getPrimes.js');
describe("Test for get prime that ", function() {
	 it("should return [2, 3,5,7 ]  ", function() {
    assert(myApp.getPrime(10) == [2,3,5] );
  })
	it("should return [2,3,5,7,11,13,17,19 ]  ", function() {

    assert(myApp(20)).equal([2,3,5,7,11,13,17,19] );
  }) 
})