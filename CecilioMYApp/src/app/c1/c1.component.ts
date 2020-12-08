import { Component, OnInit } from '@angular/core';
import { Persona } from '../persona';

@Component({
  selector: 'app-c1',
  templateUrl: './c1.component.html',
  styleUrls: ['./c1.component.css']
})
export class C1Component implements OnInit {
  nombre: string = 'Pedro';
  paisaje: string = "assets/ima.jpg";
  contador: number = 0;
  persona: Persona;

  constructor() { }

  ngOnInit(): void {
    this.persona = new Persona("Pedro", "Perez", 25);
  }

  incrementar() {
    this.contador++;
  }

  decrementar() {
    this.contador--;
  }

}
