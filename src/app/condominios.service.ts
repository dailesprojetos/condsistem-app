import { Injectable } from '@angular/core';
import { Condominio } from './condominios/condominio';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class CondominiosService {

  constructor(private http: HttpClient) {
  }

  //Métodos
  salvar( condominio: Condominio ) : Observable<Condominio> {
    return this.http.post<Condominio>('http://localhost:8080/condominios',condominio);
  }
}
