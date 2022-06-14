import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditDataComponent } from './edit-data.component';

const routes: Routes = [
  {
    path: ':id',
    component: EditDataComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EditDataRoutingModule {}
