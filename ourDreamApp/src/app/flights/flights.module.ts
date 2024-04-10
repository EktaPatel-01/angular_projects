import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddFlightComponent } from './add-flight/add-flight.component';
import { ViewflightsComponent } from './viewflights/viewflights.component';
import { DeleteFlightComponent } from './delete-flight/delete-flight.component';
import { ViewAllFlightsComponent } from './view-all-flights/view-all-flights.component';



@NgModule({
  declarations: [
    AddFlightComponent,
    ViewflightsComponent,
    DeleteFlightComponent,
    ViewAllFlightsComponent
  ],
  exports:[
    AddFlightComponent,
    ViewflightsComponent,
    DeleteFlightComponent,
    ViewAllFlightsComponent
  ],
  imports: [
    CommonModule
  ]
})
export class FlightsModule { }
