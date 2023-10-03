import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CondominiosRoutingModule } from './condominios-routing.module';
import { CondominiosFormComponent } from './condominios-form/condominios-form.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    CondominiosFormComponent
  ],
  imports: [
    CommonModule,
    CondominiosRoutingModule,
    FormsModule,
  ], exports:[
    CondominiosFormComponent,
  ]
})
export class CondominiosModule { }
