import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  isUserLogIn:boolean=false;

  login(){
    if(this.isUserLogIn==false)
    this.isUserLogIn=true;
  }
  register(){
    if(this.isUserLogIn==true)
    this.isUserLogIn=false;
  }
}
