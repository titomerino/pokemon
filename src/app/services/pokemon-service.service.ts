import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { HttpBaseService } from '../interface/http-base-service';

@Injectable({
  providedIn: 'root'
})
export class PokemonServiceService extends HttpBaseService {

  pokemonSubject = new BehaviorSubject<boolean>(false);

  constructor(protected http: HttpClient) {
    super(http, environment.pokemon_server)
  }

  //
  getPokemonObserver(): Observable<any> {
    return this.pokemonSubject.asObservable();
  }

  getPokemonList(): Observable<any> {
    const url = 'pokemon';
    const response = this.getMethod(url);
    return response;
  }
}
