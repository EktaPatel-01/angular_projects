import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SpringRestModule } from './spring-rest/spring-rest.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SpringRestModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
