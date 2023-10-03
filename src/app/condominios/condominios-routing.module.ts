import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CondominiosFormComponent } from './condominios-form/condominios-form.component';

const routes: Routes = [
  { path: 'condominios', component: CondominiosFormComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CondominiosRoutingModule { }
