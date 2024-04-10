import { Component } from '@angular/core';

@Component({
  selector: 'app-login-registration',
  templateUrl: './login-registration.component.html',
  styleUrls: ['./login-registration.component.css']
})
export class LoginRegistrationComponent {

  buttonLabel="login";
  isUserLogIn: boolean=false;
  myAge:number=50;

  name:string="";
  email:string="";
  password:string="";
  mobNumber:string="";
  location:string="";
  
  loginMe(){
    this.buttonLabel=(this.isUserLogIn==false)?'Registration':'login';
    this.isUserLogIn=(this.isUserLogIn==false)?true:false;
  }
}
