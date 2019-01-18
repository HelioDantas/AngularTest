import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { CidadeService } from '../cidade.service';



@Component({
  selector: 'app-cidades-form',
  templateUrl: './cidades-form.component.html',
  styleUrls: ['./cidades-form.component.css']
})
export class CidadesFormComponent implements OnInit  {
@Output() Cidadecadastrada = new EventEmitter();
  cadastrado = false;
  cidade: any;
  constructor(private cidadeService: CidadeService) { }
  ngOnInit(){
    this.cadastrado = false;
  }

  create(cidadeForm: NgForm){

    this.cidadeService.create({nome: cidadeForm.value.nome})
    .then(cidade => {
      this.cidade =  cidade;
      this.Cidadecadastrada.emit(this.cidade)
      this.cidade =  cidade;
      this.cadastrado = true;
    });
  }


}
