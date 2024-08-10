import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { PokeApiService } from '../../service/poke-api.service';
import { FormsModule } from '@angular/forms';
import { RouterModule, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-pokemon-list',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './pokemon-list.component.html',
  styleUrl: './pokemon-list.component.css'
})
export class PokemonListComponent implements OnInit {

  pokemons: any[] = [];
  allPokemons: any[] = [];
  filteredPokemons: any[] = [];
  searchTerm: string = '';
  currentPage: number = 1;
  itemsPerPage: number = 10;
  totalPages: number = 1;

  constructor(private pokemonService: PokeApiService) { }

  ngOnInit(): void {
    this.pokemons = this.pokemonService.getPokemons();
    this.filteredPokemons = this.pokemons;
    this.calculateTotalPages();
    this.updateDisplayedPokemons();
  }

  performSearch(): void {
    this.allPokemons = this.pokemonService.getPokemons();
    if (!this.searchTerm) {
      this.pokemons = this.allPokemons;
      this.filteredPokemons= this.allPokemons;
    } else {
      const term = this.searchTerm.toLowerCase();
      this.filteredPokemons = this.allPokemons.filter(pokemon =>
        pokemon.name.toLowerCase().includes(term) ||
        pokemon.type.toLowerCase().includes(term)
      );
      this.pokemons = this.filteredPokemons;
    }
    this.currentPage = 1;
    this.calculateTotalPages();
    this.updateDisplayedPokemons();
  }

  calculateTotalPages(): void {
    this.totalPages = Math.ceil(this.filteredPokemons.length / this.itemsPerPage);
  }

  updateDisplayedPokemons(): void {
    const start = (this.currentPage - 1) * this.itemsPerPage;
    const end = start + this.itemsPerPage;
    this.pokemons = this.filteredPokemons.slice(start, end);
  }

  goToPage(page: number): void {
    if (page > 0 && page <= this.totalPages) {
      this.currentPage = page;
      this.updateDisplayedPokemons();
    }
  }
}
