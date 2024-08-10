import { Injectable } from '@angular/core';

interface Pokemon {
  id: number;
  name: string;
  type: string;
}



@Injectable({
  providedIn: 'root'
})
export class PokeApiService {

  private pokemons: Pokemon[] = [
    { id: 1, name: 'Pikachu', type: 'Electric' },
    { id: 2, name: 'Raichu', type: 'Electric' },
    { id: 3, name: 'Squirtle', type: 'Water' },
    { id: 4, name: 'Wartortle', type: 'Water' },
    { id: 5, name: 'Blastoise', type: 'Water' },
    { id: 6, name: 'Charmander', type: 'Fire' },
    { id: 7, name: 'Charmeleon', type: 'Fire' },
    { id: 8, name: 'Charizard', type: 'Fire' },
    { id: 9, name: 'Vulpix', type: 'Fire' },
    { id: 10, name: 'Ninetales', type: 'Fire' },
    { id: 11, name: 'Magikarp', type: 'Water' },
    { id: 12, name: 'Gyarados', type: 'Water/Flying' },
    { id: 13, name: 'Electrode', type: 'Electric' },
    { id: 14, name: 'Jolteon', type: 'Electric' },
    { id: 15, name: 'Seel', type: 'Water' },
    { id: 16, name: 'Dewgong', type: 'Water/Ice' },
    { id: 17, name: 'Psyduck', type: 'Water' },
    { id: 18, name: 'Golduck', type: 'Water' },
    { id: 19, name: 'Flareon', type: 'Fire' },
    { id: 20, name: 'Magmar', type: 'Fire' }
  ];

  constructor() { }

  getPokemons(): Pokemon[] {
    return this.pokemons;
  }

  getPokemon(id:number){
    return this.pokemons.find(p => p.id == id);
  }
}
