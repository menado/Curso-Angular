import { Component, OnInit } from '@angular/core';
import { HeroesService, Heroe } from '../../services/heroes.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html'
})
export class HeroesComponent implements OnInit {

  heroes: Heroe[] = [];

  constructor(private _heroesService:  HeroesService,
              private _router: Router
              ) {
    console.log('Constructor');
  }

  ngOnInit(): void {
    console.log('ngOnInit');
    this.heroes = this._heroesService.getHeroes();
    console.log(this.heroes);
  }

  verHeroe(index:number){
    console.log(index);
    this._router.navigate(['/heroe', index]);
  };

  buscarHeroes(termino:string){
    let heroesArr: Heroe[] = [];
    termino = termino.toLowerCase();

    for(let heroe of this.heroes){
      let nombre = heroe.nombre.toLowerCase();
      if( nombre.indexOf(termino) >= 0){
        heroesArr.push(heroe);
      }
    }

    return heroesArr;
  }

}
