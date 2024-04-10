import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginFormComponent } from './login-form/login-form.component';
import { RegistrationFormComponent } from './registration-form/registration-form.component';
import { FormsModule } from '@angular/forms';
import { HomePageComponent } from './home-page/home-page.component';


@NgModule({
  declarations: [
    LoginFormComponent,
    RegistrationFormComponent,
    HomePageComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
  ],
  exports : [
    LoginFormComponent,
    RegistrationFormComponent,
    HomePageComponent
  ]
})
export class LoginRegistrationModule { }
