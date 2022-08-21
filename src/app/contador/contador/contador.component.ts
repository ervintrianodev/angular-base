import { Component } from '@angular/core';

@Component({
  selector: 'app-contador',
  templateUrl: './contador.component.html',
})
export class ContadorComponent {
  title: string = 'Contador App';
  numero: number = 0;
  accumulator: number = 5;

  public increment(): void {
    this.numero += this.accumulator;
  }
  public decremento(): void {
    this.numero -= this.accumulator;
  }
}
