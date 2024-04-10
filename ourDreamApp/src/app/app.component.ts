import { Component } from '@angular/core';
import { Person } from './Person';
import { FundTransferService } from './fund-transfer.service';
import { AccountServiceComponent } from './account-service/account-service.component';
import { AccountServiceService } from './account-service.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ourDreamApp';
  // firstName='ekta';

  // thePersonObj: Person=new Person();

  // constructor(){

  // this.firstName='java';

  // console.log('AppComponent constructor called...');
  // this.thePersonObj.firstName='Ekta';
  // this.thePersonObj.lastName='Patel';
  // this.thePersonObj.age=21;
  // this.thePersonObj.city='Sagar';

  // ----------------------------------------------------------

  // constructor(private fts: FundTransferService){
  //   console.log('AppComponent');
  //   fts.transferFunds(101,102,10000)

  // }
  // fts: FundTransferService=new FundTransferService;    no need to write this we just need to pass obj in constructor
//   transferFund()  ///THIS IS THE LOCAL FUNCTION OF THIS COMPONENT
// {
//   console.log('transfer fun calls');
//   this.fts.transferFunds(101,102,5000);///THE REAL SERVICE FUNCTION INVOKEs
//    this.fts.getBalance(101);
//    this.fts.withdraw(108,4000);
  
//    var value1=this.fts.deposite(105,2000);
//    console.log(value1);

// }
// printing(){
//   console.log('Printing is called')
//   this.fts.printBankAccount(102);
// }
// demo(){
//   console.log("calling demo function")
//   this.fts.demoFun();
// }




// constructor( private atm :AccountServiceService){
//     console.log('App Component Constructor is called... ')
// }
// openAccount(){
//    this.atm.openAccount()

//    }

   TodaysDate: Date=new Date;
   Salary=25000;
  }


