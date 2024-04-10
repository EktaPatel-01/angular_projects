import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FundTransferPageComponent } from './fund-transfer-page/fund-transfer-page.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    FundTransferPageComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    FundTransferPageComponent
  ]
})
export class FundTransferModule { }
