import { Component, Injectable, Output, ViewChild } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import {Observable, Subject} from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { ExpenseComponent } from './expense/expense.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
@Injectable()
export class AppComponent {
  title = 'my-pa';
  expenseObj: any;
  @Output() selectedObj:any;
  @ViewChild(ExpenseComponent) expense :ExpenseComponent; 
  constructor(private http:Http){
  }

  ngOnInit(){
    this.getJSON().subscribe(data => {this.expenseObj=data; 
      this.selectedObj = this.expenseObj[0];}, error => console.log(error));
  }
  public getJSON(): Observable<any> {
    return this.http.get("../assets/expense.json")
                    .map((res:any) => {console.log(res.json());return res.json(); });
  }
}
