import { Injectable } from '@angular/core';
import {Observable} from "rxjs/Rx";

import 'rxjs/add/operator/retry';
import {Compare} from "../model/compare";
import {HttpClient, HttpHeaders, HttpParams} from "@angular/common/http";

@Injectable()
export class CompareService {

  public listURL = "/master/Comparison/data/top";
  // public listURL = "/api/app/data/list.json";
  constructor(private http:HttpClient) { }


  getCompareList(page:number=1):Observable<Compare[]>{
    let url = this.listURL;
    // let params = new URLSearchParams();
    let params = new HttpParams().set('page', String(page));
    // let token='eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIxMTAwMDAwMDAwMDA5NCIsImNyZWF0ZWQiOjE1MDI0MTc2NTc2ODYsImV4cCI6MTUwMzAyMjQ1N30.bRwAvc2Ou_yX0YS7WYsluHOm1KjW0BZH-FwyCh-BfoGr1zap1-5naLJ-CjndaYwIkcRWwN7Qycb6yN6BJfLRXQ';
    // const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    return this.http.get<Compare[]>(url,{params}).retry(3);
  }
}
