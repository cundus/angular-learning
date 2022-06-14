import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AddDataRoutingModule } from './add-data-routing.module';
import { AddDataComponent } from './add-data.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [AddDataComponent],
  imports: [
    CommonModule,
    AddDataRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
  ],
})
export class AddDataModule {}
