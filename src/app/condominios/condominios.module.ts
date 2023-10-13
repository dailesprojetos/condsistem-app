import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CondominiosRoutingModule } from './condominios-routing.module';
import { CondominiosFormComponent } from './condominios-form/condominios-form.component';
import { FormsModule } from '@angular/forms';
import { CondominiosListaComponent } from './condominios-lista/condominios-lista.component';
import { DataTablesModule } from 'angular-datatables';

@NgModule({
  declarations: [
    CondominiosFormComponent,
    CondominiosListaComponent
  ],
  imports: [
    CommonModule,
    CondominiosRoutingModule,
    FormsModule,
    DataTablesModule,
  ], exports:[
    CondominiosFormComponent,
    CondominiosListaComponent
  ]
})
export class CondominiosModule { }
