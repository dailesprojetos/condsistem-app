import { Injectable } from '@angular/core';
import { Condominio } from './condominios/condominio';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs'
import { Conexao } from './conexao';

@Injectable({
  providedIn: 'root'
})
export class CondominiosService {

  constructor(private http: HttpClient) {}

  salvar(condominio: Condominio) : Observable<Condominio>{
    return this.http.post<Condominio>(Conexao.baseURL+'/condwebapi/condwebapi/condominios',condominio);
  }

  atualizar(condominio: Condominio) : Observable<any>{
    return this.http.put<Condominio>(Conexao.baseURL+`/condwebapi/condwebapi/condominios/cnpj/${condominio.cnpj}`,condominio);
  }

  deletar(condominio: Condominio) : Observable<any>{
    return this.http.delete<any>(`http://localhost:8080/condwebapi/condwebapi/condominios/${condominio.codigo}`);
  }

  getCondominios(): Observable<Condominio[]>{
    return this.http.get<Condominio[]>(Conexao.baseURL+'/condwebapi/condwebapi/condominios')
  }

  getCondominioByCnpj(cnpj: string) : Observable<Condominio>{
    return this.http.get<any>(`http://localhost:8080/condwebapi/condwebapi/condominios/cnpj/${cnpj}`);
  }
}
