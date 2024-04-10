import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'simpleInterest'
})
export class SimpleInterestPipe implements PipeTransform {

  transform(p: number, n:number, r:number): number {
      console.log('simple interest')
      return (p*n*r)/100;
  }

}
