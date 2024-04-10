import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SimpleInterestPipe } from './simple-interest.pipe';
import { SquareRootPipe } from './square-root.pipe';
import { CalculateAveragePipe } from './calculate-average.pipe';
import { CompoundInterestPipe } from './compound-interest.pipe';

@NgModule({
  declarations: [
    AppComponent,
    SimpleInterestPipe,
    SquareRootPipe,
    CalculateAveragePipe,
    CompoundInterestPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
