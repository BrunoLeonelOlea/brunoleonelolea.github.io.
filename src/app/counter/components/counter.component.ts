import { Component } from '@angular/core';

@Component({
    selector: 'app-counter',
    template: `
    <h1>{{title}}</h1>
    <button (click)="increasedBy(+1)">+1</button>
    <button (click)="resetCounter()">Reset Counter</button>
    <button (click)="decreasedBy(1)">-1</button>
    <p>{{counter}}</p>`
})

export class CounterComponent {
    public title: string = 'my first app with angular';
    public counter: number = 0;
  
    constructor() { }
    public increasedBy(value: number): void{
  
      this.counter += value;
    }
  
    public decreasedBy(value: number): void{
      this.counter -= value;
    }
  
    resetCounter():void{
      this.counter = 0
    }
    


}