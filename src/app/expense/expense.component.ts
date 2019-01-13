import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-expense',
  templateUrl: './expense.component.html',
  styleUrls: ['./expense.component.css']
})
export class ExpenseComponent implements OnInit {

  @Input() selectedObj:any;
  remaining:any;
  spentArr:any;
  detail:any;
  amountSpent:any;
  category:any;
  detailTrue:boolean = false;
  constructor() { 
    
  }

  ngOnInit() {
    console.log(this.selectedObj);    
    this.remaining = this.selectedObj.data.total;
    this.spentArr = this.selectedObj.data.spent;
  }

  loadDetails(spent:any){
    console.log(spent);
    this.detail = spent.details;
    this.amountSpent = spent.amount;
    this.category = spent.category;
    this.detailTrue = true;
  }
}
