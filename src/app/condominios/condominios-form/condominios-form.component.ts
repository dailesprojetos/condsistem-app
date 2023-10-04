import { FormGroup, FormsModule, NgForm } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { CondominiosService } from 'src/app/condominios.service';
import { Condominio, Endereco } from '../condominio';

@Component({
  selector: 'app-condominios-form',
  templateUrl: './condominios-form.component.html',
  styleUrls: ['./condominios-form.component.css']
})

export class CondominiosFormComponent implements OnInit {

  sucesso: boolean = false;
  errors: String[] = [];
  cnpj: String = '';

  condominio: Condominio;
  endereco: Endereco = new Endereco();

  constructor( private service: CondominiosService ){
    this.condominio = new Condominio();
    this.condominio.endereco=this.endereco;
  }

  onNovo(form: NgForm){
    form.form.reset();
    this.cnpj = '';
    this.sucesso = false;
    this.errors = [];
  }

  ngOnInit(): void {

  }

  onSubmit(form: NgForm){

    console.log(form)

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
        form.form.reset();
      }

    }, errorResponse => {
      this.sucesso = false;
      this.errors = errorResponse.error.errors;
      console.log(errorResponse.error.errors);
    }
    );
  }

}
