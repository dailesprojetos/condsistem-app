import { FormGroup, FormsModule, NgForm } from '@angular/forms';
import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { CondominiosService } from 'src/app/condominios.service';
import { Condominio, Endereco } from '../condominio';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-condominios-form',
  templateUrl: './condominios-form.component.html',
  styleUrls: ['./condominios-form.component.css']
})

export class CondominiosFormComponent implements OnInit {

  sucesso: boolean = false;
  errors: String[] = [];
  cnpj: String = '';
  id: String = '';
  cnpjObj: string = '';
  @ViewChild('btnAlterar') Alterar:any;

  condominio: Condominio
  desabilitaBotaoNovo:boolean = false;
  desabilitaBotaoAlterar:boolean = false;
  desabilitaBotaoSalvar:boolean = false;
  desabilitaBotaoCancelar:boolean = false;
  desabilitaBotaoInput:boolean = false;
  desabilitaInput:boolean = true;

  //endereco: Endereco = new Endereco();

  constructor(
    private service: CondominiosService,
    private activatedRoute : ActivatedRoute,
    ){
    this.condominio = new Condominio();
    //this.condominio.endereco=this.endereco;
  }

  onLista(condominioForm: NgForm){
    this.desabilitaBotaoAlterar = true;
    //this.desabilitaBotao = false;
  }

  onNovo(condominioForm: NgForm){
    condominioForm.reset();
    this.cnpj = '';
    this.sucesso = false;
    this.errors = [];
    this.desabilitaBotaoSalvar = true;
    this.desabilitaInput = false;
  }

  onAlterar(condominioForm: NgForm){
    this.cnpj = '';
    this.sucesso = false;
    this.errors = [];
    this.desabilitaBotaoNovo = true;
    this.desabilitaInput = false;
    this.desabilitaBotaoSalvar = true;
  }

  onCancelar(condominioForm: NgForm){
    condominioForm.reset();
    this.cnpj = '';
    this.sucesso = false;
    this.errors = [];
    this.desabilitaBotaoSalvar = false;
    this.desabilitaInput = true;
    this.desabilitaBotaoNovo = false;
    this.desabilitaBotaoAlterar = false;
  }

  onAtualizarRegistro(condominioForm: NgForm){

    console.log(condominioForm)
    this.service
    .atualizar(this.condominio)
    .subscribe( response => {
      console.log(response);
        this.sucesso = false;
        this.errors = [];
        this.sucesso = true;
        this.errors = [];
        //condominioForm.reset();
      }, errorResponse => {
      this.sucesso = false;
      this.errors = errorResponse.error.errors;
      console.log(errorResponse.error.errors);
    }
    );
  }

  onSalvarRegistro(condominioForm: NgForm){
    console.log(condominioForm)
    this.service
    .salvar(this.condominio)
    .subscribe( response => {
      console.log(response);
      if(response.codigo === null){
        this.cnpj = 'undefined'
        this.sucesso = false;
        this.errors = [];
      }else{
        this.sucesso = true;
        this.errors = [];
        this.cnpj = '';
        condominioForm.reset();
      }

    }, errorResponse => {
      this.sucesso = false;
      this.errors = errorResponse.error.errors;
      console.log(errorResponse.error.errors);
    }
    );

  }

  onSubmit(condominioForm: NgForm){

    if(this.condominio.codigo){
      this.onAtualizarRegistro(condominioForm);
    } else {
      this.onSalvarRegistro(condominioForm);
    }

  }

  ngOnInit(): Condominio {

    let params:any = this.activatedRoute.params
    if(params && params.value && params.value.cnpjObj){
      this.cnpjObj = params.value.cnpjObj;
      this.service
        .getCondominioByCnpj(this.cnpjObj)
        .subscribe(
          resposta => this.condominio  = resposta,
          errorResponse => this.condominio = new Condominio(),
        )
    }
    return this.condominio;
  }

}
