import { NgModule }              from '@angular/core';
import { RouterModule, Routes }  from '@angular/router';

import { ResourceComponent }     from './resource/resource.component';
import { LoginComponent }     from './user/login/login.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import {AppGuard} from "./core/app.guard.service";

const appRoutes: Routes = [
  { path: '', redirectTo: '/main', pathMatch: 'full' },
  { path: 'main',     loadChildren: './main/main.module#MainModule' ,canActivate: [AppGuard]},
  { path:'login',     component: LoginComponent  ,canActivate: [AppGuard]},
  { path: 'resource', component: ResourceComponent },
  { path: '**',       component: PageNotFoundComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes
      // { enableTracing: true } // <-- debugging purposes only
    )
  ],
  exports: [
    RouterModule
  ]
})
export class AppRouterModule {}
