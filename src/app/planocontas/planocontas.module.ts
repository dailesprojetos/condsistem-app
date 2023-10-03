import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PlanocontasRoutingModule } from './planocontas-routing.module';
import { ReceitasFormComponent } from './receitas-form/receitas-form.component';
import { DespesasFormComponent } from './despesas-form/despesas-form.component';


@NgModule({
  declarations: [
    ReceitasFormComponent,
    DespesasFormComponent
  ],
  imports: [
    CommonModule,
    PlanocontasRoutingModule
  ], exports: [
    ReceitasFormComponent,
    DespesasFormComponent
  ]
})
export class PlanocontasModule { }
