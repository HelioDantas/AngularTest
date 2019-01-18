import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { CidadesListaComponent } from './cidades-lista/cidades-lista.component';
import { CidadeService } from '../cidade.service';

@NgModule({
  declarations: [CidadesListaComponent],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  providers: [CidadeService],
  exports: [CidadesListaComponent]
})
export class CidadeModule { }
