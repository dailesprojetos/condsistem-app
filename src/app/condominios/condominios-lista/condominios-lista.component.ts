import { AppRoutingModule } from './../../app-routing.module';
import { Component, ViewChild, ElementRef, OnInit} from '@angular/core';
import { Condominio } from '../condominio';
import { CondominiosService } from 'src/app/condominios.service';
import { Subject } from 'rxjs';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-condominios-lista',
  templateUrl: './condominios-lista.component.html',
  styleUrls: ['./condominios-lista.component.css']
})


export class CondominiosListaComponent  implements OnInit{

  condominios: Condominio[] = [];
  condominioSelecionado: Condominio;
  mensagemSucesso: String = '';
  mensagemErro: String = '';
  dtOptions:DataTables.Settings={}
  dtTrigger:Subject<any> = new Subject<any>();
  @ViewChild('deletar') vdeletar!: ElementRef;

  constructor(private service: CondominiosService){
      this.condominioSelecionado = new Condominio;
  }

  ngAfterViewInit(condominioLista: NgForm) {
   this.vdeletar?.nativeElement.OnInit.ViewChild
  }

  ngOnInit(): void {

    this.dtOptions = {
      pagingType:"full",
      pageLength: 4,
      lengthMenu: [[4], [4]],
      language: {
        url: "https://cdn.datatables.net/plug-ins/1.11.3/i18n/pt_br.json"
      }
    };
    this.LoadInvoice();
      //.subscribe( resposta => this.condominios = resposta)
  }

  LoadInvoice(){
    this.service
      .getCondominios()
      .subscribe((resposta) =>{
        this.condominios = resposta
        this.dtTrigger.next(null);
    });
  }

  ngOnDestroy(): void{
    this.dtTrigger.unsubscribe();
  }

  preparaDelecao(condominio: Condominio){
    this.condominioSelecionado = condominio;
  }

  deletarCondominio(){
    this.service
      .deletar(this.condominioSelecionado)
      .subscribe(
        response =>
          this.mensagemSucesso = 'Condominio excluído com sucesso!',
          erro => this.mensagemErro = 'Ocorreu um erro ao excluír o Condominio.'
      )
  }

}
