import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GridComponent } from './grid/grid.component';
import { SingleComponent } from './single/single.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: GridComponent,
  },
  {
    path: 'widget/:widgetId',
    component: SingleComponent,
  },
  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
