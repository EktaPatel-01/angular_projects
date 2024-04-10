import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'compoundInterest'
})
export class CompoundInterestPipe implements PipeTransform {

  transform(p: number, r: number,t:number): number {
    const n=12;
    const CI=p*Math.pow(1+r/(n*100),n*t);
    return CI-p;
  }

}
