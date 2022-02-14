import { Component, OnInit } from '@angular/core';
import { PokemonServiceService } from 'src/app/services/pokemon-service.service';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.scss']
})
export class PokemonListComponent implements OnInit {

  pokemonList: any = [];

  constructor(private pokemon: PokemonServiceService) {
  }

  ngOnInit(): void {
    this.pokemon.getPokemonList().subscribe(data => {
      this.pokemonList = data.results;
      console.log(data);
    })
  }

}
