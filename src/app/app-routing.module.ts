import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CondominiosFormComponent } from './condominios/condominios-form/condominios-form.component';

const routes: Routes = [
  { path: 'home', component: CondominiosFormComponent},
  { path: '', component:CondominiosFormComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
