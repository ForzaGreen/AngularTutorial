import { Injectable } from '@angular/core';

import { Hero } from './hero';
import { HEROES } from './mock-heroes';

@Injectable()
export class HeroService {
  getHeroes(): Promise<Hero[]> {
    return Promise.resolve(HEROES);
  }
  getHeroesSlowly(): Promise<Hero[]> {
  return new Promise(resolve => {
    // Simulate server latency with 10 second delay
    setTimeout(() => resolve(this.getHeroes()), 10000);
  });
}
  // getHeroes(): Hero[] {
  //   return HEROES;
  // }
}
