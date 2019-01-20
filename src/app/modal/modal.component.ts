import { Component, OnInit, Input , EventEmitter, Output} from '@angular/core';
import {DialogModule} from 'primeng/components/dialog/dialog';
import { Expense, UnitSpend } from '../expenseModel';
import * as $ from 'jquery';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {

  @Input() showModal:boolean;
  @Input() selectedObj:Expense;
  @Output() updateEvent:EventEmitter<any> = new EventEmitter(); 
  amount:string;
  details:string;
  cat:string;
  constructor() { }

  ngOnInit() {
  }

  openModal(){
    this.showModal = true;
  }

  closeModal(){
    this.showModal = false;
  }
  addSpend(){
    console.log(this.amount);
    console.log(this.details);
    console.log($("#sel1").find(":selected").text());
    this.cat = $("#sel1").find(":selected").text();
    let spend:UnitSpend = new UnitSpend();
    spend.details = this.details;
    spend.amount = this.amount;
    spend.category = this.cat;
    var cal = Number(this.selectedObj.data.total) - Number(this.amount);
    this.selectedObj.data.total = cal.toString();
    this.selectedObj.data.spent.push(spend);
    this.clearData();
    this.closeModal();
    this.updateEvent.emit();
  }
  clearData(){
    this.amount = '';
    this.details = '';
    this.cat = '';
  }
}
