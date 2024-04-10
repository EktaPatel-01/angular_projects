import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-registration-form',
  templateUrl: './registration-form.component.html',
  styleUrls: ['./registration-form.component.css']
})
export class RegistrationFormComponent {

  // variables to store userName, userEmail, userAddress, userPhone
  @Input("userName")
  userName : string = "";

  @Input("userEmail")
  userEmail : string = "";

  @Input("userAddress")
  userAddress : string = "";

  @Input("userPhone")
  userPhone : string = "";
}
