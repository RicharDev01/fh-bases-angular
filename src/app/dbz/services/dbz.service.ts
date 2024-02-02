import { Injectable } from "@angular/core";
import { Personaje } from "../interfaces/Personaje.interface";

import { v4 as uuid } from 'uuid'


@Injectable(
  {
    providedIn: 'root'
  }
)

export class DbzService {

  public personajes: Personaje[] = [
    {
      id: uuid(),
      nombre: 'Krilin',
      poder: 800
    },
    {
      id: uuid(),
      nombre: 'Goku',
      poder: 9500
    },
    {
      id: uuid(),
      nombre: 'Veggeta',
      poder: 7500
    }
  ]

  public agregarPersonaje( personaje: Personaje ): void {

    /* --- Version anterior ---
    const nuevoPersonaje: Personaje = {
      id: uuid(),
      nombre: personaje.nombre,
      poder: personaje.poder,
    }*/

    // mejor version con ES6
    // de esta manera, no hay que agregar por individual
    // las propiedades, pueden ser 100 propiedades
    // y con esto, eso no importara, sin embargo
    // en la version anterior si importa
    const nuevoPersonaje: Personaje = {id: uuid(), ...personaje }

    this.personajes.push(nuevoPersonaje)
    
  }

  /*public onEliminarPersonaje(index: number): void{
    
    this.personajes.splice(index, 1)

  }*/

  public eliminarPersonajeById( id: string ): void {

    this.personajes = this.personajes.filter( personaje => {
      return personaje.id !== id
    } )

  }

}