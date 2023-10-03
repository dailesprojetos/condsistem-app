import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TemplateModule } from './template/template.module';
import { HomeComponent } from './home/home.component';
import { CondominiosModule } from './condominios/condominios.module';
import { PlanocontasModule } from './planocontas/planocontas.module';
import { LancamentosModule } from './lancamentos/lancamentos.module';
import { CondominiosService } from './condominios.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    TemplateModule,
    CondominiosModule,
    PlanocontasModule,
    LancamentosModule,
  ],
  providers: [
    CondominiosService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
