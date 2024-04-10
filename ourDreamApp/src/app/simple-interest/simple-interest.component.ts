import { Component } from '@angular/core';

@Component({
  selector: 'app-simple-interest',
  templateUrl: './simple-interest.component.html',
  styleUrls: ['./simple-interest.component.css']
})
export class SimpleInterestComponent {

  p: number=5000;
  n: number=5;
  r: number=3.5;
  si: number=0;

  constructor(){
    console.log('Simple interest Constructor')
    this.calculateSI()
  }
  calculateSI(){
    this.si=(this.p*this.n*this.r)/100;
  }


}
