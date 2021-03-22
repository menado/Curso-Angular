import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html'
})
export class HeroeComponent {

  heroe: any = {};
  

  constructor(private activatedRoute: ActivatedRoute,
              private _hereoService: HeroesService) {

    this.activatedRoute.params.subscribe(params => {
      console.log(params['id']);
      this.heroe = this._hereoService.getHero( params['id']);
      console.log(this.heroe);
      // this.validarCasa(this.heroe);
    });

  } 

  // casaRuta:string = '';

  // validarCasa(heroe:any){
  //   console.log(heroe['casa']);
  //   if(heroe['casa'] == 'DC'){
  //     return this.casaRuta = 'assets/img/dc-logo.jpg';
  //   }else{
  //     return this.casaRuta = 'assets/img/marvel-logo.png';
  //   }
  // }

}
