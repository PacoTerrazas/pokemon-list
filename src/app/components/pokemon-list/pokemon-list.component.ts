import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { PokeApiService } from '../../service/poke-api.service';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-pokemon-list',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './pokemon-list.component.html',
  styleUrl: './pokemon-list.component.css'
})
export class PokemonListComponent implements OnInit {

  isLoading = true;
  pokemons: any[] = [];
  allPokemons: any[] = [];
  filteredPokemons: any[] = [];
  searchTerm: string = '';
  currentPage: number = 1;
  itemsPerPage: number = 10;
  totalPages: number = 1;

  constructor(private pokemonService: PokeApiService, private router: Router) { }

    offset: number = 0;

  ngOnInit(): void {
    this.pokemonService.getPokemonList(this.offset).subscribe(data => {
      this.pokemons = data.results;
      this.isLoading = false;
    });
  }

  viewDetails(url: string): void {
    this.router.navigate(['/pokemon-detail', encodeURIComponent(url)]);
  }

  nextPage(): void {
    this.isLoading = true;
    this.offset += 10;
    this.pokemonService.getPokemonList(this.offset).subscribe(data => {
      this.pokemons = data.results;
      this.isLoading = false;
    });
  }

  previousPage(): void {
    this.offset -= 10;
    this.pokemonService.getPokemonList(this.offset).subscribe(data => {
      this.pokemons = data.results;
    });
  }

}
