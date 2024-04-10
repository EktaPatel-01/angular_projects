import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OneModule } from './one/one.module';
import { TwoModule } from "./two/two.module";
import { ThreeModule } from "./three/three.module";
import { FourModule } from './four/four.module';
import { FiveModule } from './five/five.module';


@NgModule({
    declarations: [
        AppComponent
    ],
    providers: [],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        OneModule,
        TwoModule,
        ThreeModule,
        FourModule,
        FiveModule
        
    ]
})
export class AppModule { }
