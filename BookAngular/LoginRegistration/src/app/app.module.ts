import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginRegistrationComponent } from './login-registration/login-registration.component';
import { FormsModule } from '@angular/forms';
import { FundTransferComponent } from './fund-transfer/fund-transfer.component';
import { TransferFund2Component } from './transfer-fund2/transfer-fund2.component';
import { HomeComponent } from './home/home.component';
import { Login1Component } from './login1/login1.component';
import { RegistrationComponent } from './registration/registration.component';
import { ArmstrongNumberPipe } from './armstrong-number.pipe';
import { NewmoduleModule } from './newmodule/newmodule.module';

@NgModule({
  declarations: [
    AppComponent,
    LoginRegistrationComponent,
    FundTransferComponent,
    TransferFund2Component,
    HomeComponent,
    Login1Component,
    RegistrationComponent,
    ArmstrongNumberPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
   NewmoduleModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
