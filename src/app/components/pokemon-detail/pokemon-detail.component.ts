import { Component } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { PokeApiService } from '../../service/poke-api.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-pokemon-detail',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './pokemon-detail.component.html',
  styleUrl: './pokemon-detail.component.css'
})
export class PokemonDetailComponent {
  isLoading = true;
  pokemon: any;
  isElectric = false;
  isWater = false;
  isFire = false;
  pokemonWeaknesses: String = "";

  constructor(
    private route: ActivatedRoute,
    private pokemonService: PokeApiService
  ) { }

  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get('id')!;

    setTimeout(() => {
      console.log(id);
      this.pokemon = this.pokemonService.getPokemon(id);
      console.log(this.pokemon)
      this.determinePokemonType(this.pokemon);
      this.isLoading = false;
    }, 3000);
  }

  determinePokemonType(pokemon: any) {
    console.log(pokemon.type)
    if (pokemon.type == "Electric") {
      this.isElectric = true;
      this.pokemonWeaknesses = "Electric-type moves are completely ineffective against Ground-type Pokémon. This means Ground Pokémon take no damage from Electric attacks.";
    } else if (pokemon.type == "Water") {
      this.isWater = true;
      this.pokemonWeaknesses = "Water-type Pokémon are weak to Electric-type moves and Water-type moves are not very effective against Grass-type Pokémon.";
    } else if (pokemon.type == "Fire") {
      this.isFire = true;
      this.pokemonWeaknesses = "Fire-type moves are not very effective against Water-type Pokémon, which means Fire-type Pokémon take more damage from Water-type moves";
    }
  }

  getPokemonClass(pokemon: any): any {
    switch (pokemon.type) {
      case 'Electric':
        return 'electric-type';
      case 'Water':
        return 'water-type';
      case 'Fire':
        return 'fire-type';
      default:
        return 'default-type';
    }
  }
}



