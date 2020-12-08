import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroesService } from '../../servicios/heroes.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html'
})
export class BuscadorComponent implements OnInit {
  heroes: any[] = [];
  termino: string;

  constructor(private activatedRoute: ActivatedRoute, private _heroesService: HeroesService, private router: Router) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      this.termino = params.termino;
      this.heroes = this._heroesService.buscarHeroes(params.termino);
      console.log(this.heroes);
    });
  }

  // Agregue este segmento de códig por que router estaba presentado inconvenientes, se importa y se agrega la propiedad
  verHeroe(idx: number) {
    this.router.navigate(['/heroe', idx]);
    console.log(idx);
  }
}
