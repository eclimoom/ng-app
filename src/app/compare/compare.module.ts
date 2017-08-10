import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule} from "@angular/router";
import {compareRoutes} from "./compare.routes";
import {CompareComponent} from "./compare.component";

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    RouterModule.forChild(compareRoutes)
  ],
  declarations: [
    CompareComponent
  ],
  providers: [

  ]
})
export class CompareModule { }
