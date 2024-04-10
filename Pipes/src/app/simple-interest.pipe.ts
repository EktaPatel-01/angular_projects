import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'simpleInterest'
})
export class SimpleInterestPipe implements PipeTransform {

  transform(principal: number, rate: number,time:number): number {
    let calc=principal*rate*time;
    let SI=calc/100;
    return SI;
  }

}
