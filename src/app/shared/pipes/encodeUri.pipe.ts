import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'encodeUri' })
export class EncodeUriPipe implements PipeTransform {
  transform(value: string) {
    return encodeURI(value);
  }
}
