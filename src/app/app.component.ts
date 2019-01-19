import { Component, Injectable, Output, ViewChild } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import {Observable, Subject} from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { ExpenseComponent } from './expense/expense.component';
import { Expense } from './expenseModel';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
@Injectable()
export class AppComponent {
  title = 'my-pa';
  expenseObj: Expense[];
  @Output() selectedObj:any;
  @ViewChild(ExpenseComponent) expense :ExpenseComponent; 
  constructor(private http:Http){
  }

  ngOnInit(){
    this.getJSON().subscribe(data => {this.expenseObj=data; 
      this.selectedObj = this.expenseObj[0];}, error => console.log(error));
  }
  public getJSON(): Observable<any> {
    return this.http.get("http://localhost:8080/getExpenses")
                    .map((res:any) => {console.log(res.json());return res.json(); });
  }

  callUpdate(selectObj : Expense){
    this.expenseObj.forEach((element)=>{
      if(element.name == selectObj.name){
        element.data = selectObj.data;
      }
    });
    console.log(JSON.stringify(this.expenseObj));
    let header = new Headers({'Content-Type': 'application/json'});
    let options = new RequestOptions({headers:header});
    this.http.post("http://localhost:8080/updateExpense",JSON.stringify(this.expenseObj),options).subscribe((val)=>{
      console.log(val);
    });
  }
}
