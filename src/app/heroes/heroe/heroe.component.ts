
import { Component } from '@angular/core'

@Component({

  selector: 'app-heroes-heroe',
  templateUrl: 'heroe.component.html'

})

export class HeroeComponent  {

  public nombreHeroe: string = 'Spiderman'
  public edadHeroe: number = 27

  public get capitalizarNombre(): string {

    return this.nombreHeroe.toUpperCase()

  }

  public getDescripcion(): string {

    return `${this.nombreHeroe} - ${this.edadHeroe} años`
  }

  public cambiarNombre(): void {

    this.nombreHeroe = 'Ironman'

  }

  public cambiarEdad(): void {
    this.edadHeroe = 40
  }

}