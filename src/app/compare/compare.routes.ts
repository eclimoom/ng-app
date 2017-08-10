
import { CompareComponent }     from './compare.component';

export const compareRoutes=[
  {
    path:'',
    redirectTo:'compare/1',
    pathMatch:'full'
  },
  {
    path:'compare/:id',
    component:CompareComponent
  }
];
