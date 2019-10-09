var expect = require('chai').expect;
var FizzBuzz = require('../src/main.js');


describe('Main', function() {
    it('should return fizz when multiple of 3', function() {
        console.log(FizzBuzz(3)).to.be.equal('Fizz');
        expect(FizzBuzz(3)).to.be.equal('Fizz');
    });
});


