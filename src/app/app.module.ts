import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';

import { AppComponent }     from './app.component';
import { AppRouterModule } from './app.routes';

import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import {CoreModule} from "./core/core.module";
import {NoopAnimationsModule} from '@angular/platform-browser/animations';
import {RouterModule} from "@angular/router";
import {ResourceComponent} from "./resource/resource.component";
import {HttpModule} from "@angular/http";

@NgModule({
  imports: [
    BrowserModule,
    NoopAnimationsModule,
    FormsModule,
    RouterModule,
    HttpModule,
    CoreModule,
    AppRouterModule
  ],
  declarations: [
    AppComponent,
    ResourceComponent,
    PageNotFoundComponent
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
