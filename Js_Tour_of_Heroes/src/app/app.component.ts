import { Component } from '@angular/core';

import { Hero } from './hero';

const HEROES: Hero[] = [
  { id: 11, name: 'Ferium' },
  { id: 12, name: 'Pythonic' },
  { id: 13, name: 'Relastic' },
  { id: 14, name: 'Celebrium' },
  { id: 15, name: 'Magneto' },
  { id: 16, name: 'Telekuta' },
  { id: 17, name: 'Jasonian' },
  { id: 18, name: 'Dynamico' },
  { id: 19, name: 'Soulstealer' },
  { id: 20, name: 'Fang' }
];

@Component({
  selector: 'my-app',
  template: `
    <h1 class="title">{{title}}</h1>
    <h2 class="myheroes">My Heroes</h2>

    <hero-detail [hero]="selectedHero"></hero-detail>

    <ul class="heroes">
      <li *ngFor="let hero of heroes"
        [class.selected]="hero === selectedHero"
        (click)="onSelect(hero)">
        <span class="badge">{{hero.id}}</span> {{hero.name}}
      </li>
    </ul>

  `,
})

export class AppComponent {
  title = 'Tour of Heroes';
  heroes = HEROES;
  selectedHero: Hero;

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }
}
