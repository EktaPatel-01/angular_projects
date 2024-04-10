import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'compoundInterest'
})
export class CompoundInterestPipe implements PipeTransform {

  transform(p: number, r: number,n:number,t:number): number {
    let compinterest=p*Math.pow((1+r/100),t)-p;
    let CI=Math.floor(compinterest);
    return CI;
  }

}
