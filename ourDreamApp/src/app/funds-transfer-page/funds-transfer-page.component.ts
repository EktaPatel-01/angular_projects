import { Component } from '@angular/core';
import { FundTransferService } from '../fund-transfer.service';
import { BankAccount } from './BankAccount';

@Component({
  selector: 'app-funds-transfer-page',
  templateUrl: './funds-transfer-page.component.html',
  styleUrls: ['./funds-transfer-page.component.css']
})
export class FundsTransferPageComponent {

  sourceAccountNumber:number=0;
  targetAccountNumber:number=0;
  amountToTransfer:number=0;

  sourceAccounts:number[]=[
    101,102,103,104,105
  ]
  targetAccounts:number[]=[
    501,502,503,504,505
  ]

  bankAccountObj: BankAccount=new BankAccount();

  constructor(private fts:FundTransferService){
    this.bankAccountObj.accountNumber=101;
    this.bankAccountObj.accountHolder='Smith';
    this.bankAccountObj.accountBalance=5000;

  }

  bankAccountSourceArray: BankAccount[]=[
        {accountNumber:101,accountHolder:'Jane',accountBalance:50000},
        {accountNumber:102,accountHolder:'Jill',accountBalance:60000},
        {accountNumber:103,accountHolder:'Astha',accountBalance:70000},
        {accountNumber:104,accountHolder:'Anu',accountBalance:66000}
  ];
  bankAccountTargetArray: BankAccount[]=[
      {accountNumber:501,accountHolder:'Suresh',accountBalance:50000},
      {accountNumber:502,accountHolder:'Raam',accountBalance:55000},
      {accountNumber:503,accountHolder:'Riya',accountBalance:80000},
      {accountNumber:504,accountHolder:'Kartik',accountBalance:40000}
];


  localTransferFunction(){
    console.log('LocalTransferFunction is invoking');
    // this.fts.transferFunds(this.sourceAccountNumber,this.targetAccountNumber,this.amountToTransfer);
    for(let index=0;index<this.bankAccountSourceArray.length;index++){
      if(this.bankAccountSourceArray[index].accountNumber==this.sourceAccountNumber){
      console.log('source Account found with Balance:'+this.bankAccountSourceArray[index].accountBalance);
      this.bankAccountSourceArray[index].accountBalance-=this.amountToTransfer;
      break;
      }
    }
    for(let index=0;index<this.bankAccountTargetArray.length;index++){
      if(this.bankAccountTargetArray[index].accountNumber==this.targetAccountNumber){
      console.log('target Account found with Balance:'+this.bankAccountTargetArray[index].accountBalance);
      this.bankAccountTargetArray[index].accountBalance+=this.amountToTransfer;
      break;
      }
    }
  }


  localTransferViaService(){
    console.log('localTransferViaService()  is invoking the service')
    this.fts.transferFundsFromArray(this.bankAccountSourceArray,this.bankAccountTargetArray,this.sourceAccountNumber,this.targetAccountNumber,this.amountToTransfer)
  }

  localDepositAmount(){
    console.log('localDepositAmount');
    this.fts.deposite(this.sourceAccountNumber,this.amountToTransfer);

  }
  localWithdraw(){
    console.log('Withdrawing ammount');
    this.fts.withdraw(this.sourceAccountNumber,this.amountToTransfer);
  }


}
