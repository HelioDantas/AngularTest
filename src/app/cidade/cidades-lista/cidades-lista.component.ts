import { Component, OnInit } from '@angular/core';
import { CidadeService } from '../../cidade.service';

@Component({
  selector: 'app-cidades-lista',
  templateUrl: './cidades-lista.component.html',
  styleUrls: ['./cidades-lista.component.css']
})
export class CidadesListaComponent implements OnInit {
  cidades: any;
  constructor(private cidadeService: CidadeService) { }

  ngOnInit() {
    this.cidadeService.lista()
    .then(cidade => {
      this.cidades = cidade;
        });
    console.log(this.cidades);
  }

}