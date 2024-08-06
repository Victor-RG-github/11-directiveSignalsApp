import { Component, computed, signal } from '@angular/core';

@Component({
  selector: 'signals-counter-page',
  templateUrl: './counter-page.component.html',
  styleUrl: './counter-page.component.css',
})
export class CounterPageComponent {
  counter = signal(10); //Señal base
  square = computed(() => this.counter() * this.counter()); //Señal computada

  updateCounter(increase: number): void {
    this.counter.update((value) => value + increase);
  }
}
