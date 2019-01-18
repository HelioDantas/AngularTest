import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';



@Injectable({
  providedIn: 'root'
})
export class CidadeService {
  cidades = 'http://localhost:3000/cidades';
  configUrl = 'assets/config.json';
  // [{ nome: 'Rio de Janeiro', id: 1}, { nome: 'Rio de Janeiro', id: 1}];

  constructor(private http: HttpClient) { }

  lista() {
    return this.http.get(this.cidades)
    .toPromise()
    .then(Response => Response);
  }
} 