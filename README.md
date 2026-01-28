This project includes a simple JavaScript library (mylib.js) which includes basic arithmetic operations and a helper function for checking numeric input. The project also contains a Mocha + Chai unit test suite that verifies the correct behavior of each exported mylib.js function and demonstrates the use of before() and after() hooks.

# Usage

## Initilialization

npm init -y

## Running Tests

npm test

## Running Main Program

node main.js

# Project Directory Structure

AT00BY10-3012-unit-testing/ 
├── src/  
│   └── mylib.js  
├── test/  
│   └── mylib.assert.test.js  
├── main.js  
└── package.json  

# Test structure
---

The unit tests are implemented using Mocha together with Chai's Assert style. All tests are placed in one test suite, which also includes:
- before() hook that runs once before any tests start
- after() hook that runs once after all tests have been completed

Each exported function has at least two tests to verify correct behavior and error handling. The divide() function is also tested to ensure it throws a ZeroDivision error when the divisor is zero.