import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LancamentosRoutingModule } from './lancamentos-routing.module';
import { LancamentosFormComponent } from './lancamentos-form/lancamentos-form.component';

@NgModule({
  declarations: [
    LancamentosFormComponent
  ],
  imports: [
    CommonModule,
    LancamentosRoutingModule,
  ], exports: [
    LancamentosFormComponent
  ]
})
export class LancamentosModule { }
