import { PersonasService } from './../personas.service';
import { Personas } from './../personas';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-personas',
  templateUrl: './personas.component.html',
  styleUrls: ['./personas.component.css']
})
export class PersonasComponent implements OnInit {
  personas: Personas[];

  constructor(private personasServie: PersonasService) { }

  ngOnInit(): void { // Lo que primero se lanza 
    this.personasServie.getPersonas().subscribe(
      personas => this.personas = personas
    );
  }

}
