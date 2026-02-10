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
import { HttpClientModule, provideHttpClient, withFetch } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { DataTablesModule } from 'angular-datatables';
import { provideAnimations } from '@angular/platform-browser/animations'
import { provideToastr } from 'ngx-toastr';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule,
    TemplateModule,
    CondominiosModule,
    PlanocontasModule,
    LancamentosModule,
    DataTablesModule,
  ],
  exports:[
    DataTablesModule,
  ],
  providers: [
    CondominiosService,
    provideAnimations(),
    provideToastr(),
    provideHttpClient(withFetch())
  ],
  bootstrap: [AppComponent]
})
export class AppModule {

}
