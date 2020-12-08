import { HeroesService } from './../../services/heroes.service';
import { HeroeModel } from './../../models/heroe.model';
import { Component, OnInit } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import Swal from 'sweetalert2';
import { switchAll } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styleUrls: ['./heroe.component.css']
})
export class HeroeComponent implements OnInit {

  heroe: HeroeModel = new HeroeModel();

  constructor(private heroesService: HeroesService, private route: ActivatedRoute) { }

  ngOnInit(): void {

    const id = this.route.snapshot.paramMap.get('id');
    console.log(id);

    if (id !== 'nuevo') {

      this.heroesService.getHeroe(id).subscribe((resp: HeroeModel) => {
        this.heroe = resp;
        this.heroe.id = id;
      });

    }

  }

  guardar(form: NgForm) {

    if (form.invalid) {

      console.log('Formulary no valid');
      return;

    }

    Swal.fire({

      position: 'top-end',
      icon: 'success',
      title: 'Your work has  saved',
      showConfirmButton: false,
      timer: 1500

    });

    let petition: Observable<any>;

    if (this.heroe.id) {
      petition = this.heroesService.actualizarHeroe(this.heroe);
    } else {
      petition = this.heroesService.crearHeroe(this.heroe);
    }

    petition.subscribe(resp => {
      Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Your work has been saved',
        showConfirmButton: false,
        timer: 1500
      });
    });
  }
}
