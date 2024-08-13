import { Component } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
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
  pokemonDetail: any

  constructor(
    private route: ActivatedRoute,
    private pokemonService: PokeApiService,
    private router: Router
  ) { }
  ngOnInit(): void {
    this.isLoading = true;

    this.route.paramMap.subscribe(params => {
      const url = decodeURIComponent(params.get('url') || '');
      this.pokemonService.getPokemonDetail(url).subscribe(data => {
        this.pokemonDetail = data;
        this.isLoading = false;
      });
    });

  }

  goBack(): void {
    this.router.navigate(['/pokemon-list']);
  }

}



