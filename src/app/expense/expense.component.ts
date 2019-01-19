import { Component, OnInit, Input ,EventEmitter, Output } from '@angular/core';
import { Expense, UnitSpend } from '../expenseModel';

@Component({
  selector: 'app-expense',
  templateUrl: './expense.component.html',
  styleUrls: ['./expense.component.css']
})
export class ExpenseComponent implements OnInit {

  @Input() selectedObj:Expense;
  @Output() update:EventEmitter<Expense> = new EventEmitter();
  remaining:string;
  spentArr:UnitSpend[];
  detail:any;
  amountSpent:any;
  category:any;
  detailTrue:boolean = false;
  showModal:boolean = false;
  constructor() { 
    
  }

  ngOnInit() {
    console.log(this.selectedObj);    
    this.remaining = this.selectedObj.data.total;
    this.spentArr = this.selectedObj.data.spent;
  }

  loadDetails(spent:UnitSpend){
    console.log(spent);
    this.detail = spent.details;
    this.amountSpent = spent.amount;
    this.category = spent.category;
    this.detailTrue = true;
  }

  openModal(){
    this.showModal= true;
  }

  callUpdate(){
    this.update.emit(this.selectedObj);
  }
}
