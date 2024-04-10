import { Injectable } from '@angular/core';
import { SavingsAccount } from './SavingsAccount';

@Injectable({
  providedIn: 'root'
})
export class TransferFundsService {

  constructor() {
    console.log("service Constructor is executing..")
   }
   transferAmountViaService(acc1:SavingsAccount,acc2:SavingsAccount,amtToTransfer:number){

    acc1.accountBalance -= amtToTransfer;
    acc2.accountBalance += amtToTransfer;

   }
}
