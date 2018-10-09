import {ImgDefaultPipe} from './img-default.pipe';

describe('ImgDefaultPipe', () => {
  let pipe: ImgDefaultPipe;
  let defaultImg: string;

  beforeEach(() => {
    pipe = new ImgDefaultPipe();
    defaultImg = 'http://example.com/default-image.png';
  });

  afterEach(() => {
    pipe = null;
    defaultImg = '';
  });

  it('providing no value should return fallback', function () {
    expect(pipe.transform('', defaultImg)).toBe(defaultImg);
  });

  it('providing explicit value should return the value itself', function () {
    const img = 'http://example.com/my-avatar.png';
    expect(pipe.transform(img, defaultImg)).toBe(img);
  });
});
