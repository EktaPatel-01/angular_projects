import { Component } from '@angular/core';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent {
  username:string="";
  password:string="";

  submit(){
    console.log("Username:",this.username);
    console.log("password:",this.password);
  }
}
