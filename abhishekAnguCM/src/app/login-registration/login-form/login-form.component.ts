import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent {

  // variable to store userName using two-way data binding
  @Input("userName")
  userName : string = "";

  // variable to store userEmail using two-way data binding
  @Input("userEmail")
  userEmail : string = "";
}
