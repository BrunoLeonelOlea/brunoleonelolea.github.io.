import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  private heroNames: string[] = ['Spiderman', 'Batman', 'Hulk', 'Ironman', 'Superman'];
  private heroeBorrado?:string;

  constructor() { }

  ngOnInit(): void {
  }

  public getHeroNames(): string[] {
    return this.heroNames;
  }

  public borrarUltimoHeroe(): void {
    this.heroeBorrado = this.heroNames.pop();
  }

  public getHeroeBorrado(): string {
    return this.heroeBorrado;
  }

}
