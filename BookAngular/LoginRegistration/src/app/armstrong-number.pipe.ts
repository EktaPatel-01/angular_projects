import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'armstrongNumber'
})
export class ArmstrongNumberPipe implements PipeTransform {
 
  transform(num: number): boolean {
    //count of digits in number
    const digits = String(num).split("").length;
    let original:number = num;
    let result:number = 0;
    //calculating addition of each digit raised to number of digits in number
    while(num>0){
      result += Math.pow(num%10, digits);
      num = Math.floor(num / 10);
      console.log(result)
    }
    // checking if both are same number
    return result==original;
  }
 
}
 


