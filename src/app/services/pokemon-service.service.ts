import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpBaseService } from '../interface/http-base-service';

@Injectable({
  providedIn: 'root'
})
export class PokemonServiceService extends HttpBaseService {

  constructor(protected http: HttpClient) {
    super(http, environment.pokemon_server)
  }

  //
  getPokemonList() {}
}
