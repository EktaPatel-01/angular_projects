import { Component, OnInit } from '@angular/core';
import { FDAccount } from './FDAccount';
import { FixedDepositService } from '../fixed-deposit.service';

@Component({
  selector: 'app-fixed-deposit',
  templateUrl: './fixed-deposit.component.html',
  styleUrls: ['./fixed-deposit.component.css']
})
export class FixedDepositComponent implements OnInit {
  amtToTransfer:number=0;

  fdObj:FDAccount={accNumber:101,accHolder:"Avani",accBalance:20000}
  fdObj2:FDAccount={accNumber:201,accHolder:"Ekta",accBalance:13000}

  constructor(private fxd:FixedDepositService){
  }

  ngOnInit(): void {  
  }

  transfer(){
    if(this.amtToTransfer<=0){
      alert("you cannot enter negative value or zero");
    }
    else if(this.amtToTransfer>this.fdObj.accBalance){
      alert("Not sufficient balance");
    }
    else{
      this.fxd.transferViaService(this.fdObj,this.fdObj2,this.amtToTransfer)
      alert("Transfer Successful");
    }
  }
}
