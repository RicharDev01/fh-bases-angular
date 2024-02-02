
import { Component, EventEmitter, Input, Output }  from '@angular/core'
import { Personaje } from '../../interfaces/Personaje.interface'

@Component({
  selector: 'app-dbz-lista-personajes',
  templateUrl: 'lista-personajes.component.html'
})

export class ListaPersonajesComponent {

  // propiedades


  // recibe los datos del padre @Input
  @Input()
  public listaPersonajes: Personaje[] = [
    {
      nombre: 'Trunks',
      poder: 250
    }
  ]

  @Output()
  public onEliminar: EventEmitter<string> = new EventEmitter();


  /// metodos

  public onEliminarPersonaje( id?: string): void {

    if( !id ) return;

    console.log( {id} );
    

    this.onEliminar.emit(id)
    
  }

}