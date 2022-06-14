import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DetailDataRoutingModule } from './detail-data-routing.module';
import { DetailDataComponent } from './detail-data.component';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [DetailDataComponent],
  imports: [CommonModule, DetailDataRoutingModule, MatButtonModule],
})
export class DetailDataModule {}
