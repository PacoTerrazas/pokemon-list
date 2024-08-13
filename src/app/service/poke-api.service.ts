import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

interface Pokemon {
  id: number;
  name: string;
  type: string;
}



@Injectable({
  providedIn: 'root'
})
export class PokeApiService {

  private apiUrl = 'https://pokeapi.co/api/v2'

  constructor(private http: HttpClient) { }

  getPokemonDetail(url: string): Observable<any> {
    return this.http.get<any>(url);
  }

  getPokemonList(offset: number = 0): Observable<any> {
    return this.http.get(`${this.apiUrl}/pokemon?limit=${10}&offset=${offset}`);
  }
}
