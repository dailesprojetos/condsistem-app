import { Component} from '@angular/core';
import { Condominio } from '../condominio';
import { CondominiosService } from 'src/app/condominios.service';
import { Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-condominios-lista',
  templateUrl: './condominios-lista.component.html',
  styleUrls: ['./condominios-lista.component.css']
})
export class CondominiosListaComponent {

  condominios: Condominio[] = [];
  dtOptions:DataTables.Settings={}
  dtTrigger:Subject<any> = new Subject<any>();

  constructor(private service: CondominiosService){
  }

  ngOnInit(): void {
    this.dtOptions = {
      pagingType:"full_number",
      pageLength: 2
    };
    this.service
      .getCondominios()
      .subscribe((resposta) =>{
        this.condominios = resposta
        this.dtTrigger.next(resposta);
    });
      //.subscribe( resposta => this.condominios = resposta);

  }

  ngOnDestroy(): void{
    this.dtTrigger.unsubscribe();
  }

}
