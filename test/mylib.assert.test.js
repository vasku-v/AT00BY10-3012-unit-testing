// chai assert test for mylib.js functions

const assert = require("chai").assert;
const { add, subtract, multiply, divide, isEven } = require("../src/mylib");

describe("mylib.js (assert skeleton)",
  () => {
    // before function that executes before the first test
    before(() => {
      console.log("Testing starts...");
    });
    // after function that executes after tests are done
    after(() => {
      console.log("Testing completed.");
    });
    // assert test for add function
    describe("add()", () => {
      it("should add two numbers together correctly", () => {
        assert.equal(add(2, 4), 6);
      });
      it("should handle negative numbers correctly", () => {
        assert.equal(add(-3, -2), -5);
      });
      it("should handle decimals correctly", () => {
        assert.equal(add(1.3, 5.8), 7.1);
      });
      it("should throw an error if inputs are not numbers", () => {
        assert.throws(() => add(2, "a"), "Inputs must be numbers");
      });
    });
    // assert test for subtract function
    describe("subtract()", () => {
      it("should subtract numbers correctly", () => {
        assert.equal(subtract(5, 3), 2);
      });
      it("should handle negative results", () => {
        assert.equal(subtract(3, 8), -5);
      });
      it("should subtract negative numbers correctly", () => {
        assert.equal(subtract(-5, -6), 1);
      });
      it("should throw an error if inputs are not numbers", () => {
        assert.throws(() => subtract(5, "b"), "Inputs must be numbers");
      });
    });
    // assert test for multiply function
    describe("multiply()", () => {
      it("should multiply numbers correctly", () => {
        assert.equal(multiply(2, 6), 12);
      });
      it("should handle zero", () => {
        assert.equal(multiply(7, 0), 0);
      });
      it("should handle multiplication with only negative numbers correctly", () => {
        assert.equal(multiply(-8, -3), 24);
      });
    });
    // assert test for divide function
    describe("divide()", () => {
      it("should divide numbers correctly", () => {
        assert.equal(divide(10, 5), 2);
      });
      it("should throw an error when dividing by zero", () => {
        assert.throws(() => divide(8, 0), "ZeroDivision");
      });
    });
    // assert test for isEven function
    describe("isEven()", () => {
      it("should return true for even numbers", () => {
        assert.isTrue(isEven(8));
      });
      it("should return false for odd numbers", () => {
        assert.isNotTrue(isEven(3));
      });
      it("should throw an error if inputs is not a number", () => {
        assert.throws(() => isEven("true"), "Inputs must be numbers");
      });
    });
  });
