import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'imgDefault'
})
export class ImgDefaultPipe implements PipeTransform {

  transform(value: string, fallback: string): string {
    let imageSrc = '';

    if (value) {
      imageSrc = value;
    } else {
      imageSrc = fallback;
    }

    return imageSrc;
  }

}
