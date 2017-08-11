import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';
import {RouterModule} from "@angular/router";
import {NoopAnimationsModule} from '@angular/platform-browser/animations';
import {HttpClientModule,HTTP_INTERCEPTORS} from '@angular/common/http';

import { AppComponent }     from './app.component';
import { AppRouterModule } from './app.routes';

import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import {CoreModule} from "./core/core.module";
import {ResourceComponent} from "./resource/resource.component";
import { AuthInterceptor } from './core/auth.interceptor';
import { LoginComponent } from './user/login/login.component';
import {NavigatorService} from "./core/navigator.service";
import {AppGuard} from "./core/app.guard.service";

@NgModule({
  imports: [
    BrowserModule,
    HttpClientModule,
    NoopAnimationsModule,
    FormsModule,
    RouterModule,
    CoreModule,
    AppRouterModule
  ],
  declarations: [
    AppComponent,
    ResourceComponent,
    PageNotFoundComponent,
    LoginComponent
  ],
  providers:[AppGuard,{
    provide: HTTP_INTERCEPTORS,
    useClass: AuthInterceptor,
    multi: true,
  },NavigatorService],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
