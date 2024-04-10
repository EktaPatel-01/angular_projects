import { Injectable } from '@angular/core';
import { FDAccount } from './fixed-deposit/FDAccount';

@Injectable({
  providedIn: 'root'
})
export class FixedDepositService {

  constructor() { 
    console.log("service function call");
  }

  transferViaService(source:FDAccount,target:FDAccount,amtToTransfer:number){
    source.accBalance -= amtToTransfer;
    target.accBalance += amtToTransfer;

    console.log("transfer successful...");
  }
}
