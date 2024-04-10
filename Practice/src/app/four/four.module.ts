import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FixedDepositComponent } from './fixed-deposit/fixed-deposit.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    FixedDepositComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports:[
    FixedDepositComponent
  ]
})
export class FourModule { }
