import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CompoundInterestPipe } from './compound-interest.pipe';



@NgModule({
  declarations: [
    CompoundInterestPipe
  ],
  imports: [
    CommonModule
  ],
  exports:[
    CompoundInterestPipe
  ]
})
export class Question3Module { }
