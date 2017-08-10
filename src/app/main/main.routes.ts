import { RouterModule } from '@angular/router';
import { MainComponent }     from './main.component';

export const mainRoutes=[
  {
    path:'',
    component:MainComponent,
    children:[{
      path:'',
      loadChildren:'../compare/compare.module#CompareModule'
    }]
  }
];
