import { Component } from '@angular/core';
import { SavingAccount } from './SavingAccount';
import { SavingAccountServiceService } from '../saving-account-service.service';

@Component({
  selector: 'app-saving-account',
  templateUrl: './saving-account.component.html',
  styleUrls: ['./saving-account.component.css']
})
export class SavingAccountComponent {
  sourceAccountNumber:number=0;
  targetAccountNumber:number=0;
  amountToTransfer:number=0;

  sourceAccounts:number[]=[
    101,102,103,104,105
  ]
  targetAccounts:number[]=[
    501,502,503,504,505
  ]

  savingAccountObj: SavingAccount=new SavingAccount();

  constructor(private sts:SavingAccountServiceService){
    this.savingAccountObj.accountNumber=101;
    this.savingAccountObj.accountHolder='Smith';
    this.savingAccountObj.accountBalance=5000;

}}
