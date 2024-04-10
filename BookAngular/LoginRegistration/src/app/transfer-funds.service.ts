import { Injectable } from '@angular/core';
import { BankAccount } from './fund-transfer/BankAccount';

@Injectable({
  providedIn: 'root'
})
export class TransferFundsService {

  constructor() {
    console.log("transfer funds service created...");
   }

   transferFunds(source:BankAccount,target :BankAccount,amtToTransfer:number){

        source.accbalance -= amtToTransfer;
        target.accbalance += amtToTransfer;

        console.log('transfering funds '+amtToTransfer+' from'+source+" to dest account "+target);
   }
}
