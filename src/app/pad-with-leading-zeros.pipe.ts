import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'padWithLeadingZeros'
})
export class PadWithLeadingZerosPipe implements PipeTransform {

  transform(value: any, length: number): string {
    value = value.toString();
    while (value.length < length) {
      value = '0' + value;
    }
    return value;
  }

}
