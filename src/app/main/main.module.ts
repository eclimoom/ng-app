import { NgModule } from '@angular/core';
import {RouterModule} from "@angular/router";
import {mainRoutes} from "./main.routes";
import {MainComponent} from "./main.component";
import {CompareService} from "../compare/service/compare.service";

@NgModule({
  imports: [
    RouterModule.forChild(mainRoutes)
  ],
  declarations: [MainComponent],
  providers: [CompareService]
})
export class MainModule { }
