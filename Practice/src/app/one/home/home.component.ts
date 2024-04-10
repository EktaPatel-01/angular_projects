import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  userLogin:boolean=false;

  login(){
    if(this.userLogin==false){
      this.userLogin=true;
    }
  }
  register(){
    if(this.userLogin==true)
    this.userLogin=false;
  }

}
