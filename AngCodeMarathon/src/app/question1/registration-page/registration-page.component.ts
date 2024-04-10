import { Component } from '@angular/core';

@Component({
  selector: 'app-registration-page',
  templateUrl: './registration-page.component.html',
  styleUrls: ['./registration-page.component.css']
})
export class RegistrationPageComponent {
  username:string="";
  password:string="";
  email:string="";
  address:string="";
  phone!:number;

  register(){
    console.log("Username:",this.username);
    console.log("password:",this.password);
    console.log("email:",this.email);
    console.log("address:",this.address);
    console.log("phone:",this.phone);
  }
}
