import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';



@Injectable({
  providedIn: 'root'
})
export class CidadeService {
  // https://servicodados.ibge.gov.br/api/v1/localidades/mesorregioes
  cidades = 'http://localhost:3000/cidades';
  configUrl = 'assets/config.json';


  constructor(private http: HttpClient) { }

  lista() {
    return this.http.get(this.cidades)
    .toPromise()
    .then(Response => Response);
  }
} 