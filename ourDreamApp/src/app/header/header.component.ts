import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  title='Welcome to My Airline World';

  changeHeading(){
    console.log('heading is clicked');
    if(this.title=='Welcome to My Airline World'){
    this.title='Welocme to Our Airline World';
    }
    else{
      this.title='Welcome to My Airline World';
    }
  }

}
