import { NgForm } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { StringifyOptions } from 'querystring';


class Cliente {
  nome: string;
  email: String;
  profissao: string;
  /*constructor(nome, email, profissao){
    this.nome = nome;
    this.email = email;
    this.profissao = profissao;

  };*/
}

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent  {

  cliente = new Cliente();
  value = [];
  profissoes = ['Programador', 'analista', 'testador'];

  salva(form: NgForm) {

    //this.cliente =  new  Cliente(form.value.nome,form.value.email,form.value.profissao);
    

    console.log(this.cliente);
    console.log(this.value);
  }

}
