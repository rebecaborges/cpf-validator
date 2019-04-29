const chai = require('chai');
const expect = chai.expect;
const lib = require('../lib/index')

describe("cpfValidator()", ()=> {
  // it("for random numbers returns false", ()=> {
  //  expect(lib.cpfValidator(0202134)).to.equal(false)
  // });
   it("for CPF valid returns true", ()=> {
    expect(lib.cpfValidator(407566348)).to.equal(5)
   });
   it("for CPF valid returns true", ()=> {
    expect(lib.cpfValidator(4075663)).to.equal(0)
   });
   
});