import { PersonasService } from './../personas.service';
import { Personas } from './../personas';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-personas',
  templateUrl: './personas.component.html',
})
export class PersonasComponent implements OnInit {
  personas: Personas[];

  constructor(private personasService: PersonasService) { }

  ngOnInit(): void {
    this.personasService.getPersonas().subscribe( personas => this.personas = personas);
  }
}
