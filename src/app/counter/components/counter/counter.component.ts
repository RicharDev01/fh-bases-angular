
import { Component } from '@angular/core'

@Component({
  selector: 'app-counter',
  templateUrl: 'counter.component.html' 
})
export class CounterComponent {

  public counter: number = 0;

  public increaseBy( valueCounter: string ): void {
    this.counter += Number(valueCounter);
  }

  public decreseBy(valueCounter: string ): void {
    this.counter -= Number(valueCounter);
  }

  public reset(): void {
    this.counter = 0;
  }

  public changeValueCounter(valueCounter: string): void {
    this.counter = Number(valueCounter)
  }


}