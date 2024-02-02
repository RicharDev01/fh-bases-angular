import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { MainPageComponent } from './pages/main-page.component';
import { ListaPersonajesComponent } from './components/lista-personajes/lista-personajes.component';
import { AddFormPersonaje } from './components/addFormPersonajes/form-personaje.component';



@NgModule({
  declarations: [
    MainPageComponent,
    ListaPersonajesComponent,
    AddFormPersonaje
  ],
  imports: [
    CommonModule,
    FormsModule
  ], 
  exports: [
    MainPageComponent
  ]
})
export class DbzModule { }
