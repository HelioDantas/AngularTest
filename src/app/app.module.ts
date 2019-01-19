import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router'

import { AppComponent } from './app.component';
import { FormComponent } from './form/form.component';
import { CidadeModule } from './cidade/cidade.module';
import { CidadesListaComponent } from './cidade/cidades-lista/cidades-lista.component';

  const routes: Routes = [
    { path: '',   redirectTo: '/cidades', pathMatch: 'full' },
    {path:'cidades', component: CidadesListaComponent},
    {path:'form', component: FormComponent}

  ]
@NgModule({
  declarations: [
    AppComponent,
    FormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    CidadeModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
