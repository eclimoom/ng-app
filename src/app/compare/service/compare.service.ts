import { Injectable } from '@angular/core';
import {Http,Response, Headers, RequestOptions,URLSearchParams } from "@angular/http";
import {Observable} from "rxjs/Observable";
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import {Compare} from "../model/compare";

@Injectable()
export class CompareService {

  public listURL = "/master/Comparison/data/mine";
  constructor(public http:Http) { }

  public getCompareList(page:number=1):Observable<Compare[]>{
    let url = this.listURL;
    let params = new URLSearchParams();
    params.set('page',String(page));
    return this.http
      .get(url,{search:params})
      .map((res:Response) => {
        let result=res.json();
        console.log(result);
        return result;
      })
      .catch((error:any) => Observable.throw(error || 'Server error'));
  }
}
