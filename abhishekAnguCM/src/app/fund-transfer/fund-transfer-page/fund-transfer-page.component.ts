import { Component, OnInit } from '@angular/core';
import { SavingsAccount } from './SavingsAccount';
import { FundTransferService } from '../fund-transfer.service';

@Component({
  selector: 'app-fund-transfer-page',
  templateUrl: './fund-transfer-page.component.html',
  styleUrls: ['./fund-transfer-page.component.css']
})
export class FundTransferPageComponent implements OnInit {

  // creating objects of SavingsAccount
  accounts!: SavingsAccount[];

  // variables to store source and target account number
  sourceAccountNumber!: number;
  targetAccountNumber!: number;

  // variable to store amount to transfer
  amountToTransfer!: number;

  // injecting service object in constructor
  constructor(private fundTransferService: FundTransferService) { }

  //initializing account objects
  ngOnInit(): void {
    this.accounts = [
      {
        accNo: 1001,
        accHolderName: "Abhishek Nagarkar",
        accBalance: 100000
      },
      {
        accNo: 2001,
        accHolderName: "Sohan Ubale",
        accBalance: 200000,

      }
    ]
  }

  // local transfer function that calls service's transfer function
  transferFunds() {
    let srcAccount: SavingsAccount = new SavingsAccount();
    let tgtAccount: SavingsAccount = new SavingsAccount();

   for(let account of this.accounts){
    if(account.accNo == this.targetAccountNumber){
      tgtAccount = account;
    }
    if(account.accNo == this.sourceAccountNumber){
      srcAccount = account;
    }
   }

   // checking if user has entered same account numbers
   if(srcAccount.accNo==tgtAccount.accNo){
    alert("Same accounts selected!");
   }
   if(srcAccount.accNo!=0 && tgtAccount.accNo!=0){
     this.fundTransferService.transferFunds(srcAccount,  tgtAccount, this.amountToTransfer);
   } else {
    alert("Account does not exist!");
   }
  }
}
