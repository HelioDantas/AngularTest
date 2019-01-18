import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { CidadesListaComponent } from './cidades-lista/cidades-lista.component';
import { CidadeService } from './cidade.service';
import { CidadesFormComponent } from './cidades-form/cidades-form.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [CidadesListaComponent, CidadesFormComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [CidadeService],
  exports: [CidadesListaComponent]
})
export class CidadeModule {




 }
