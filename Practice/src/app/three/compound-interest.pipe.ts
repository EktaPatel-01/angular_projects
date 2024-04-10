import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'compoundInterest'
})
export class CompoundInterestPipe implements PipeTransform {

  transform(p: number, r: number,t:number,n:number): number {

    const num=12;
    let CI=p*Math.pow((1+r/100),t)-p;  //one formula
    // let CI=p*Math.pow(1+r/(n*100),n*t)-p;   //two formula
     return Math.floor(CI);
    
    
  }

}
