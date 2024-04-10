import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AccountServiceService {

  constructor() { 
    console.log('Account Services Consturctor is invoked...')
  }
  openAccount(){
    console.log('ACCOUNT IS OPENED');
  }
  fetchAccount(accNumber:number){
    console.log('Account Details of Account number is '+accNumber)
    
    }
  fetchAllAccounts() {
    console.log('Fetching All acounts')
  
  }
  deleteAccount(accNumber:number){
    console.log('Deleting Account number'+accNumber)
  }
  modifyAccount(accNumber:number){
    console.log('Modifying Account number'+accNumber)
  }
}
