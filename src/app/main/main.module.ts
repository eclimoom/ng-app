import { NgModule } from '@angular/core';
import {RouterModule} from "@angular/router";
import {mainRoutes} from "./main.routes";
import {MainComponent} from "./main.component";
import {CompareService} from "../compare/service/compare.service";
import {CommonModule} from "@angular/common";

@NgModule({
  imports: [
    RouterModule.forChild(mainRoutes),
    CommonModule
  ],
  declarations: [MainComponent],
  providers: [CompareService]
})
export class MainModule { }
