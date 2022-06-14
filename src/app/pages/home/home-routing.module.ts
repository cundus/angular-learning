import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    loadChildren: () =>
      import('../table-list/table-list.module').then((m) => m.TableListModule),
  },
  {
    path: 'add-data',
    loadChildren: () =>
      import('../add-data/add-data.module').then((m) => m.AddDataModule),
  },
  {
    path: 'detail-data',
    loadChildren: () =>
      import('../detail-data/detail-data.module').then(
        (m) => m.DetailDataModule
      ),
  },
  {
    path: 'edit-data',
    loadChildren: () =>
      import('../edit-data/edit-data.module').then((m) => m.EditDataModule),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeRoutingModule {}
