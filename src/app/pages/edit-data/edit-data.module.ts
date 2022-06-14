import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EditDataRoutingModule } from './edit-data-routing.module';
import { EditDataComponent } from './edit-data.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [EditDataComponent],
  imports: [
    CommonModule,
    EditDataRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
  ],
})
export class EditDataModule {}
