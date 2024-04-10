import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Question1Module } from './question1/question1.module';
import { Question2Module } from "./question2/question2.module";
import { Question3Module } from './question3/question3.module';
import { Question4Module } from './question4/question4.module';
import { Question5Module } from './question5/question5.module';

@NgModule({
    declarations: [
        AppComponent
    ],
    providers: [],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        Question1Module,
        Question2Module,
        Question3Module,
        Question4Module,
        Question5Module
    ]
})
export class AppModule { }
