import { Component, ViewChild } from '@angular/core';
import { LoginFormComponent } from '../login-form/login-form.component';
import { RegistrationFormComponent } from '../registration-form/registration-form.component';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent {
  // variable to keep track of login status , by default -> false
  isUserLoggedIn : boolean = true;

  // accessing child components (loginForm) data in parent (home)
  @ViewChild(LoginFormComponent)
  loginForm : LoginFormComponent = new LoginFormComponent;

  // accessing child components (registerForm) data in parent (home)
  @ViewChild(RegistrationFormComponent)
  registrationForm : RegistrationFormComponent = new RegistrationFormComponent;

  // function for user login
  // when user clicks on login button after filling the form, 
  // the isUserLoggedIn should toggle to true
  login(){
    // checking if the user is logged in
    if(this.isUserLoggedIn == false){
      this.isUserLoggedIn = true;
    }
    console.log("User name="+this.loginForm.userName);
    console.log("Email="+this.loginForm.userEmail);
  }

  // function for user registration
  // when user clicks on register button
  // the user should fill the registration form
  // and the isUserLoggedIn should toggle to true
  register(){
    // checking if the user is registered 
    if(this.isUserLoggedIn == true){
      this.isUserLoggedIn = false;
    }
    // printing data using two way binding
    console.log("User name="+this.registrationForm.userName);
    console.log("Email="+this.registrationForm.userEmail);
    console.log("Address="+this.registrationForm.userAddress);
    console.log("Phone Number="+this.registrationForm.userPhone);
  }
}
