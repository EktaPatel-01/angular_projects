import { Injectable } from '@angular/core';
import { SavingsAccount } from './fund-transfer-page/SavingsAccount';

@Injectable({
  providedIn: 'root'
})
export class FundTransferService {

  constructor() { }

  // function to transfer amount from source account to target account 
  transferFunds(sourceAccount: SavingsAccount, targetAccount: SavingsAccount, amountToTransfer: number){
    // checking if the amount to transfer is valid amount
    if(amountToTransfer <= 0){
      alert("Amount to transfer must be greater than 0!");
      
    } 
    // checking if the source account has sufficient balance
    else if (sourceAccount.accBalance < amountToTransfer){
      alert("Insufficient balance!");
    } 
    // transferring funds from source account to target account
    else {
      sourceAccount.accBalance -= amountToTransfer;
      targetAccount.accBalance += amountToTransfer;
      alert("Successfully transferred Rs. "+amountToTransfer+" from "+sourceAccount.accNo+" to "+targetAccount.accNo);
    }
  } 
}
