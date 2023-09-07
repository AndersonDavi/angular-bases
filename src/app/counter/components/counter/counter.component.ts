import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-counter',
  template: `
    <h3>Counter: {{ counter }}</h3>
    <button (click)="increaseBy(-1)">-1</button>
    <button (click)="resetCount()">Reset</button>
    <button (click)="increaseBy(1)">+1</button>

    <h3>{{ counter }} * {{ counter }} = {{ counter * counter }}</h3>
  `,
})
export class CounterComponent {
  constructor() {}
  public title: string = 'holaaaaa';
  public counter: number = 1;

  increaseBy(value: number): void {
    this.counter += value;
  }
  resetCount(): void {
    this.counter = Math.round(Math.random() * 100);
  }

  @HostListener('document:keydown', ['$event'])
  eventoTeclado(event: KeyboardEvent) {
    if (event.key === '+') {
      this.increaseBy(1);
    } else if (event.key === '-') {
      this.increaseBy(-1);
    } else if (event.key === 'Backspace') {
      this.resetCount();
    }
  }
}
