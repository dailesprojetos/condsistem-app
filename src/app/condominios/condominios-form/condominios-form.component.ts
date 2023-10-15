import { FormGroup, FormsModule, NgForm } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
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
  cnpjObj: string = '';

  condominio: Condominio;
  desabilitaBotaoNovo:boolean = false;
  desabilitaBotaoAlterar:boolean = false;
  desabilitaBotaoSalvar:boolean = false;
  desabilitaBotaoCancelar:boolean = false;
  desabilitaBotaoInput:boolean = false;
  desabilitaInput:boolean = true;


  //endereco: Endereco = new Endereco();

  constructor(
    private service: CondominiosService,
    private activatedRoute : ActivatedRoute
    ){
    this.condominio = new Condominio();
    //this.condominio.endereco=this.endereco;
  }

  onLista(){
    //this.desabilitaBotaoAlterar = true;
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
    condominioForm.reset();
    this.cnpj = '';
    this.sucesso = false;
    this.errors = [];
    this.desabilitaBotaoNovo = true;
    this.desabilitaInput = false;
  }

  onCancelar(condominioForm: NgForm){
    condominioForm.reset();
    this.cnpj = '';
    this.sucesso = false;
    this.errors = [];
    this.desabilitaBotaoSalvar = false;
    this.desabilitaInput = true;
  }

  onSalvar(condominioForm: NgForm){

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
