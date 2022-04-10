import { Injectable } from '@angular/core';
import { Hero } from '../model/hero';

@Injectable({ providedIn: 'root' })
export class HeroService {

  private heroes = [
    { id: 1, name: 'Thor' },
    { id: 2, name: 'Hulk' },
    { id: 3, name: 'Iron Man' },
    { id: 4, name: 'Captain America' },
    { id: 5, name: 'Spider-Man' },
    { id: 6, name: 'Black Panther' }
  ];

  private generateHeroId(): number {
    return this.heroes.length > 0 ? Math.max(...this.heroes.map(hero => hero.id)) + 1 : 1;
  }

  constructor() {
  }

  getHeroes(): Hero[] {
    return this.heroes;
  }

  getHero(id: number): Hero {
    return this.heroes.find(hero => hero.id === id);
  }

  addHero(hero: Hero): void {
    hero.id = this.generateHeroId();
    this.heroes.push(hero);
  }

  updateHero(updatedHero: Hero): void {
    this.heroes.find(hero => hero.id === updatedHero.id).name = updatedHero.name;
  }

  deleteHero(id: number): void {
    const index: number = this.heroes.findIndex(hero => hero.id === id);
    if (index !== -1) {
      this.heroes.splice(index, 1);
    }
  }
}
