import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent implements OnInit {

  public name: string = 'Ironman';
  public age: number = 45;


  constructor() { }

  ngOnInit(): void {
  }

  public setName(name:string): void {
    this.name = name;
  }

  public setAge(age: number): void {
    this.age = age;
  }

  public capitalizedName(): string{
    return this.name.toUpperCase();
  }

  public getHeroDescription():string {
    return `${this.name} - ${this.age}`;
  }

  public switchName():void{
      this.name = 'Spiderman';
  }

  public switchAge(): void {
    this.age = 25;
  }

  public resetForm(): void {
    this.age = 45;
    this.name = 'Ironman';
  }

}
