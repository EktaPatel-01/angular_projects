import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WeeklyStatementComponent } from './weekly-statement/weekly-statement.component';



@NgModule({
  declarations: [
    WeeklyStatementComponent
  ],
  exports:[
    WeeklyStatementComponent
  ],
  imports: [
    CommonModule
  ]
})
export class StatementModule { }
