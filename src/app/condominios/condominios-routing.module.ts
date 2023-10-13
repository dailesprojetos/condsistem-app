import { CondominiosListaComponent } from './condominios-lista/condominios-lista.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CondominiosFormComponent } from './condominios-form/condominios-form.component';

const routes: Routes = [
  { path: 'condominios', component: CondominiosFormComponent},
  { path: 'condominios/:id', component: CondominiosFormComponent},
  { path: 'condominios/cnpj/:cnpjObj', component: CondominiosFormComponent},
  { path: 'condominios-lista', component: CondominiosListaComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CondominiosRoutingModule { }
