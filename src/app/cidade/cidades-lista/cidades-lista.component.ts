import { Component, OnInit } from '@angular/core';
import { CidadeService } from '../cidade.service';
import { listLazyRoutes } from '@angular/compiler/src/aot/lazy_routes';

@Component({
  selector: 'app-cidades-lista',
  templateUrl: './cidades-lista.component.html',
  styleUrls: ['./cidades-lista.component.css']
})
export class CidadesListaComponent implements OnInit {
  cidades: any;
  constructor(private cidadeService: CidadeService) { }

  ngOnInit() {
    this.lista();
  }
  lista(){
    this.cidadeService.lista()
    .then(cidade => {
      this.cidades = cidade;
        });

  }
  delete(id:number){

    this.cidadeService.delete(id)
    .then( () =>{
      this.lista()
    })

    console.log(id);
  }

  update(cidade:any){
    this.cidadeService.update(cidade)
    .then(() =>{
      this.lista();
    })

  }
}
