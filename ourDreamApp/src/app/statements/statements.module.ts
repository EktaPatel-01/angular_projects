import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddStatementComponent } from './add-statement/add-statement.component';
import { DeleteStatementComponent } from './delete-statement/delete-statement.component';



@NgModule({
  declarations: [
    AddStatementComponent,
    DeleteStatementComponent
  ],
  exports:[
    AddStatementComponent,
    DeleteStatementComponent
  ],
  imports: [
    CommonModule
  ]
})
export class StatementsModule { }
