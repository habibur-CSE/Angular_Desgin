import { Component } from '@angular/core';

@Component({
  selector: 'app-bank',
  standalone: true,
  imports: [],
  templateUrl: './bank.component.html',
  styleUrl: './bank.component.css'
})
export class BankComponent {
  BankId : number;
   Address :string;
   AccountNo: string;
   BranceName : string;
   CreateBy : string;
   updateBy : string;
   isActive : boolean;
   companyId : number;

   constructor(){
    this.BankId= 0;
    this.Address = '';
    this.AccountNo = '';
    this.BranceName = '';
    this.CreateBy = '';
    this.updateBy = '';
    this.companyId = 0;
    this.isActive = false;

   }

}
