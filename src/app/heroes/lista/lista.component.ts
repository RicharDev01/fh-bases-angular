
import { Component } from '@angular/core'

@Component({

    selector: 'app-heroes-lista',
    templateUrl: 'lista.component.html'

})

export class ListaComponent {

  public nombreHeroes: string[] = ['Spiderman', 'Thor', 'Hulk', 'Black Panther', 'Antman', 'Ironman']

  public heroeBorrado?: string

  public borrarUltimoHeroe(): void {
    this.heroeBorrado = this.nombreHeroes.pop()
  }

}