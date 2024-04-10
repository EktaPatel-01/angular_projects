import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddPayeeComponent } from './add-payee/add-payee.component';
import { DeletePayeeComponent } from './delete-payee/delete-payee.component';
import { ViewPayeeComponent } from './view-payee/view-payee.component';



@NgModule({
  declarations: [
    AddPayeeComponent,
    DeletePayeeComponent,
    ViewPayeeComponent
  ],
  exports:[ 
    AddPayeeComponent
  ],
  imports: [
    CommonModule
  ]
})
export class PayeeModule { }
