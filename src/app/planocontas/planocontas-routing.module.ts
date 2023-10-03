import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReceitasFormComponent } from './receitas-form/receitas-form.component';
import { DespesasFormComponent } from './despesas-form/despesas-form.component';

const routes: Routes = [
  { path: 'receitas', component: ReceitasFormComponent},
  { path: 'despesas', component: DespesasFormComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PlanocontasRoutingModule { }
