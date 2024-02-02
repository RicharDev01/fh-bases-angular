
import { Component, EventEmitter, Output } from '@angular/core'
import { Personaje } from '../../interfaces/Personaje.interface'
import { identifierName } from '@angular/compiler';

@Component({
  selector: 'app-dbz-form-personaje',
  templateUrl: './form-personaje.component.html'
})
export class AddFormPersonaje {

  // estamos preparando para poder compartir (emitir) 
  // el objeto Personaje hacia el padre
  @Output()
  public onNuevoPersonaje: EventEmitter<Personaje> = new EventEmitter()

  public personaje: Personaje = {
    nombre: '',
    poder: 0
  }

  emitirPersonaje(): void {

    if( this.personaje.nombre.length == 0 ) return;

    // aqui es donde enviamos (emitimos) el personaje
    this.onNuevoPersonaje.emit(this.personaje)

    // limpiamos el objeto
    this.personaje = { nombre: "", poder: 0 }
    
  }

}