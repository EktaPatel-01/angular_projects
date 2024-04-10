import { Component, OnInit } from '@angular/core';
import { BankAccount } from './BankAccount';
import { TransferFundsService } from '../transfer-funds.service';
//import { TransferFundsService } from '../transfer-funds.service';

@Component({
  selector: 'app-fund-transfer',
  templateUrl: './fund-transfer.component.html',
  styleUrls: ['./fund-transfer.component.css']
})
export class FundTransferComponent implements OnInit {

  amtToTrans: number = 0;
  message:string="";

  // bankObj: BankAccount = new BankAccount();
  // bankObj1: BankAccount = new BankAccount();

  bankObj:BankAccount={accNumber:101,accHolder:"Smith",accbalance:1000};
  bankObj1:BankAccount={accNumber:201,accHolder:"Ekta",accbalance:30000};

  constructor(private fts:TransferFundsService) {

  }
  ngOnInit(): void {
    // this.bankObj.accNumber = 101;
    // this.bankObj.accHolder = "Smith";
    // this.bankObj.accbalance = 50000;

    // this.bankObj1.accNumber = 201;
    // this.bankObj1.accHolder = "Ekta";
    // this.bankObj1.accbalance = 1000;
  }

  transfer() {
    
    if(this.amtToTrans<=0){
      this.message="You cannot enter negative value";
    }
    else if(this.amtToTrans>this.bankObj.accbalance){
      this.message="not sufficient balance"
    }
    else{
      this.bankObj.accbalance -= this.amtToTrans;
      this.bankObj1.accbalance += this.amtToTrans;

      console.log(this.bankObj.accbalance)
      console.log(this.bankObj1.accbalance)
      console.log("transferringgggg...");
      this.message="transfer successful";
    }
    

  }
  transferViaService(){
    if(this.amtToTrans<=0){
      alert("You cannot enter negative value");
    }
    else if(this.amtToTrans>this.bankObj.accbalance){
      alert("not sufficient balance")
    }
    else{
      this.fts.transferFunds(this.bankObj,this.bankObj1,this.amtToTrans);
      alert('transfer successful');
    }
  }
}

//   srcAccNum:number=0;
//   trgAccNum:number=0;
//   amtToTrans:number=0;

//   srcAccounts:number[]=[
//     101,102,103,104
//   ]
//   trgAccounts:number[]=[
//     201,202,203,204
//   ]

//   bankObj:BankAccount=new BankAccount();

//  

//   bnkAccSrcArray:BankAccount[]=[
//     {accNumber:101,accHolder:'A',accbalance:20000},
//     {accNumber:102,accHolder:'B',accbalance:40000},
//     {accNumber:103,accHolder:'C',accbalance:60000},
//     {accNumber:104,accHolder:'D',accbalance:80000}
//   ]
//   bnkAccTrgArray:BankAccount[]=[
//     {accNumber:201,accHolder:'P',accbalance:10000},
//     {accNumber:202,accHolder:'Q',accbalance:20000},
//     {accNumber:203,accHolder:'R',accbalance:30000},
//     {accNumber:204,accHolder:'S',accbalance:40000}

//   ]
//   transfer(){
//     console.log('transfer is running');
//     for(let i =0;i<this.bnkAccSrcArray.length;i++)
//     {
//       console.log('hello1');

//       if(this.bnkAccSrcArray[i].accNumber==this.srcAccNum){
//         console.log('source account balance :'+this.bnkAccSrcArray[i].accbalance);
//         this.bnkAccSrcArray[i].accbalance-=this.amtToTrans;
//         console.log('hello2');

//         break;
//       }
//     }
//     console.log('hello');
//     for(let i=0;i<this.bnkAccTrgArray.length;i++){
//       if(this.bnkAccTrgArray[i].accNumber==this.trgAccNum){
//         console.log('target account balance :'+this.bnkAccTrgArray[i].accbalance);
//         this.bnkAccTrgArray[i].accbalance +=this.amtToTrans;
//         break;
//       }
//     }
//   }


// }
