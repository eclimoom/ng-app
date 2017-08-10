import { NgModule }              from '@angular/core';
import { RouterModule, Routes }  from '@angular/router';

import { ResourceComponent }     from './resource/resource.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const appRoutes: Routes = [
  { path: '', redirectTo: '/main', pathMatch: 'full' },
  { path: 'main',     loadChildren: './main/main.module#MainModule' },
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
