import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LancamentosFormComponent } from './lancamentos-form/lancamentos-form.component';

const routes: Routes = [
  { path: 'lancamentos', component: LancamentosFormComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LancamentosRoutingModule { }
