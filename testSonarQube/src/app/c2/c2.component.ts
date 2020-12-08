import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-c2',
  templateUrl: './c2.component.html',
  styleUrls: ['./c2.component.css']
})
export class C2Component implements OnInit {
  listaPersonas: Personas[] = [];
  constructor() { }

  ngOnInit(): void {
    this.listaPersonas.push(new Personas("Pedro", "Perez", 34), new Personas ("Ana", "Machuca", 43));
  }

}
