import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  isUserLogin:boolean=false;

  login(){
    if(this.isUserLogin==false)
    this.isUserLogin=true;
  }
  registration(){
    if(this.isUserLogin==true)
    this.isUserLogin=false;
  }
}
