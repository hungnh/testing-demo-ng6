import {helloWorld} from './hello-world';

// The "describe(string, function)" function defines what we call a Test Suite,
// a collection of individual Test Specs.
describe('Hello World', () => {

  // The "it(string, function)" function defines an individual Test Spec,
  // this contains one or more Test Expectations.
  it('should says Hello World', function () {

    // The "expect(actual)" expression is what we call an Expectation.
    // In conjunction with a Matcher it describes an expected piece of behaviour in the application.
    expect(helloWorld())

    // The "matcher(expected)" expression is what we call a Matcher.
    // It does a boolean comparison with the expected value passed in vs. the actual value passed to the expect function,
    // if they are false the spec fails.
      .toEqual('Hello world!');
  });
});
