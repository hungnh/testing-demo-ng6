import {helloWorld} from './hello-world';

describe('Hello World (setup & teardown demo)', () => {

  let expected = '';

  beforeEach(() => {
    expected = 'Hello world!';
  });

  afterEach(() => {
    expected = '';
  });

  it('should says Hello World', function () {
    const actual = helloWorld();
    expect(actual).toEqual(expected);
  });
});
