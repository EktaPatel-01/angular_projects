import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'calculateAverage'
})
export class CalculateAveragePipe implements PipeTransform {

  transform(value: number, ...args: number[]): number {
    let sum=value;
    for(let i=0;i<args.length;i++){
      sum+=args[i];
    }
    let n=1+args.length;
    return sum/n;
  }

}
