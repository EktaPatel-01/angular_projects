import { Injectable } from '@angular/core';
import { BankAccount } from './funds-transfer-page/BankAccount';

@Injectable({
  providedIn: 'root'
})
export class FundTransferService {

  constructor() { 
    console.log('Fund transfer service created')
  }
  transferFunds(source :number,target:number,amountToTransfer:number){
    console.log('Transering '+amountToTransfer+ ' funds from '+ source+' to '+target);
  }


  transferFundsFromArray(bankAccountSourceArray :BankAccount[],bankAccountTargetArray:BankAccount[],
    sourceAccountNumber:number,targetAccountNumber:number,amountToTransfer:number){
      console.log('LocalTransferFunction is invoking');
      // this.fts.transferFunds(this.sourceAccountNumber,this.targetAccountNumber,this.amountToTransfer);
      for(let index=0;index< bankAccountSourceArray.length;index++){
        if(bankAccountSourceArray[index].accountNumber==sourceAccountNumber){
        console.log('source Account found with Balance:'+bankAccountSourceArray[index].accountBalance);
        bankAccountSourceArray[index].accountBalance-=amountToTransfer;
        break;
        }
      }
      for(let index=0;index<bankAccountTargetArray.length;index++){
        if(bankAccountTargetArray[index].accountNumber==targetAccountNumber){
        console.log('target Account found with Balance:'+bankAccountTargetArray[index].accountBalance);
        bankAccountTargetArray[index].accountBalance+=amountToTransfer;
        break;
        }
      }
  }


  getBalance(accNumber:number):number{
    console.log('Balance is'+accNumber)
    return 10000;
    }
  withdraw(accNumber:number,amountWithdraw:number) {
    console.log('Withdrwing amount is'+amountWithdraw+'from account number'+accNumber)
  
  }
  deposite(accNumber:number,ammountDeposit:number){
    console.log('Depositing amount'+ammountDeposit+'to account number'+accNumber)
  }
  printBankAccount(accNumber:number){
    console.log('BankAccount number'+accNumber);
  }

  demoFun(){
    console.log("Hello Hii ByeBye")
  }
}
