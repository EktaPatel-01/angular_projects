import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import {FormsModule} from '@angular/forms'


@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent,
    HomeComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports:[
    LoginComponent,
    RegisterComponent,
    HomeComponent
  ]
})
export class OneModule { }
