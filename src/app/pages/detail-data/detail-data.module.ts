import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DetailDataRoutingModule } from './detail-data-routing.module';
import { DetailDataComponent } from './detail-data.component';

@NgModule({
  declarations: [DetailDataComponent],
  imports: [CommonModule, DetailDataRoutingModule],
})
export class DetailDataModule {}
