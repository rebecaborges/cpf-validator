const chai = require("chai");
const expect = chai.expect;
const cpfValidator = require("../lib/index");

describe("cpfValidator()", ()=> {
  it("for random numbers returns false", ()=> {
    expect(cpfValidator(0202134)).to.equal(false)
  });
  it("for random numbers bigger then 12 returns false", ()=> {
    expect(cpfValidator(3893893287393)).to.equal(false);
  });
  it("for string return false", ()=> {
    expect(cpfValidator("22824244261056851")).to.equal(false);
  });
  it("for string with valid number return false", ()=> {
    expect(cpfValidator("88279776001")).to.equal(false);
  });
  it("for number with punctuation return false", ()=> {
    expect(cpfValidator(206.830-60)).to.equal(false);
  });
  it("for CPF valid returns true", ()=> {
    expect(cpfValidator(20683044060)).to.equal(true);
  });
  it("for CPF valid returns true", ()=> {
    expect(cpfValidator(14131222051)).to.equal(true);
  });
  it("for CPF valid returns true", ()=> {
    expect(cpfValidator(88279776001)).to.equal(true);
  });
  it("1 repeted returns false", ()=> {
    expect(cpfValidator(11111111111)).to.equal(false);
  });
  it("2 repeted returns false", ()=> {
    expect(cpfValidator(22222222222)).to.equal(false);
  });
  it("3 repeted returns false", ()=> {
    expect(cpfValidator(33333333333)).to.equal(false);
  });
});