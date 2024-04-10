import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'calculateAverage'
})
export class CalculateAveragePipe implements PipeTransform {

  transform(firstValue: number, ...otherValues: number[]): number {
    console.log(firstValue+': calculateAveragePipe: transform() is invoked...');
    let sum=firstValue;
    for(let index=0;index<otherValues.length;index++){
      sum=sum+otherValues[index];
    }
    return(sum)/(1+otherValues.length);

}
}
