import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';



@Injectable({
  providedIn: 'root'
})
export class CidadeService {
  // https://servicodados.ibge.gov.br/api/v1/localidades/mesorregioes
  cidadesURL = 'http://localhost:3000/cidades';
  configUrl = 'assets/config.json';
  cidade

  constructor(private http: HttpClient) { }

  lista() {
    return this.http.get(this.cidadesURL)
    .toPromise()
    .then(Response => Response)
    .catch(Response =>alert('O back não que trabalhar :('))

  }
  create(cidadeNome: any){
    return this.http.post(this.cidadesURL, cidadeNome)
    .toPromise()
    .then(Response => Response)
    .catch(Response =>alert('O back não que trabalhar :('))


  }
  delete(id: number){
    return this.http.delete(this.cidadesURL +'/'+id)
    .toPromise()
    .then(() => null)
    .catch(Response =>alert('O back não que trabalhar :('))

  }

  update(cidade: any){
    return this.http.put(this.cidadesURL +'/' + cidade.id, cidade)
    .toPromise()
    .then(Response => Response)
    .catch(Response =>alert('O back não que trabalhar :('))



  }
}
