import { Component, OnInit } from '@angular/core';
import { TransferFundsService } from '../transfer-funds.service';
import { SavingsAccount } from '../SavingsAccount';

@Component({
  selector: 'app-fund-transfer',
  templateUrl: './fund-transfer.component.html',
  styleUrls: ['./fund-transfer.component.css']
})
export class FundTransferComponent implements OnInit {
  constructor(private fts:TransferFundsService){

  }
  ngOnInit(): void {
      
  }
  amtToTransfer!:number;
  obj1:SavingsAccount={accountNumber:13245,accountHolder:"Astha Dubey",accountBalance:50000};
  obj2:SavingsAccount={accountNumber:98765,accountHolder:"Ekta Patel",accountBalance:7000};

  localTransfer(){
    if (this.amtToTransfer<=0) {
      alert("You cannot Enter 0 or Negative Value");
    }
    else if(this.amtToTransfer>this.obj1.accountBalance){
      alert("Not Sufficient Balance..");
    }
    else{
      this.fts.transferAmountViaService(this.obj1,this.obj2,this.amtToTransfer)
      alert("Transfer Successfull...");
    }
  }
}
