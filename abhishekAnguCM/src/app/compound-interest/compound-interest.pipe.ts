import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'compoundInterest'
})
export class CompoundInterestPipe implements PipeTransform {

  transform(
    principal: number,
    rateOfInterest: number,
    compoundingFrequency: number,
    timePeriod: number
  ): number {
    // compound interest formula:
    // A = P * ( 1 + R/N ) ^( N*T ) 
    // and CI = A - P
    // P -> principal, R -> rate of interest, N -> compounding frequency, T -> time period in years
    let amount = principal*Math.pow((1 + rateOfInterest/compoundingFrequency), (compoundingFrequency*timePeriod));
    let compoundInterest = amount - principal;

    return compoundInterest;
  }

}
