import { Component } from '@angular/core';

@Component({
  selector: 'app-condition',
  templateUrl: './condition.component.html',
  styleUrls: ['./condition.component.css']
})
export class ConditionComponent {

  // myAge:number =30;
  buttonLabel="login";
  isUserLogIn: boolean=false;
  myAge:number=50;
  
  loginMe(){
    this.buttonLabel=(this.isUserLogIn==false)?'Logout':'login';
    this.isUserLogIn=(this.isUserLogIn==false)?true:false;
  }
}
