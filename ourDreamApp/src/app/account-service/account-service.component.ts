import { Component } from '@angular/core';
import { AccountServiceService } from '../account-service.service';

@Component({
  selector: 'app-account-service',
  templateUrl: './account-service.component.html',
  styleUrls: ['./account-service.component.css']
})
export class AccountServiceComponent {
    constructor(private atm:AccountServiceService){

    }
    openAccount(){
       console.log('open account');
       this.atm.openAccount()
    }
    modifyAcc(){
      console.log('modify account');
      this.atm.modifyAccount(101)
    }
    DelecteAcc(){
      console.log('delete account');
      this.atm.deleteAccount(102)
    }
    fetchAcc(){
      console.log('fetch account');
      this.fetchAcc()
    }
}
