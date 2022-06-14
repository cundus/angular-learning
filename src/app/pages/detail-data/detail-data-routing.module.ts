import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailDataComponent } from './detail-data.component';

const routes: Routes = [
  {
    path: ':id',
    component: DetailDataComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetailDataRoutingModule {}
