import { Pipe, PipeTransform } from '@angular/core';
import { isMoment } from 'moment';

@Pipe({
  name: 'momentDate'
})
export class MomentDatePipe implements PipeTransform {

  transform(value: any, ...args: string[]): unknown {
    if(!value){
      return "";
    }
    return value.format(args[0]);
  }

}
