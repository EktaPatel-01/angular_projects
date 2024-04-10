import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddpayeeComponent } from './addpayee/addpayee.component';



@NgModule({
  declarations: [
    AddpayeeComponent
  ],
  exports:[
    AddpayeeComponent
  ],
  imports: [
    CommonModule
  ]
})
export class PayeeModule { }
