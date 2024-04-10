import { Component } from '@angular/core';

@Component({
  selector: 'app-compound-interest-page',
  templateUrl: './compound-interest-page.component.html',
  styleUrls: ['./compound-interest-page.component.css']
})
export class CompoundInterestPageComponent {
  // variables to store values of principal,
  // timePeriod,
  // number of times interest is compounded,
  // rate of interest
  principal: number = 0;

  timePeriod: number = 0;

  compoundingFrequency: number = 0;

  rateOfInterest: number = 0;
}
