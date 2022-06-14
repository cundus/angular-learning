import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AddDataRoutingModule } from './add-data-routing.module';
import { AddDataComponent } from './add-data.component';

@NgModule({
  declarations: [AddDataComponent],
  imports: [CommonModule, AddDataRoutingModule],
})
export class AddDataModule {}
