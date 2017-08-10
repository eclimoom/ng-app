import { Component, OnInit } from '@angular/core';
import {Compare} from "../compare/model/compare";
import {CompareService} from "../compare/service/compare.service";

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  public compareList:Array<Compare>;

  constructor(
    public compareService:CompareService
  ) {

  }

  //get info from serve

  ngOnInit() {
    this.loadDate();
  }

  public loadDate(){


    return this.compareService.getCompareList(1).subscribe(
      res=>{
        this.compareList = res['data']
      },
      error=>{console.log(error)},
      ()=>{console.log("complete")}
    )
  }

}
