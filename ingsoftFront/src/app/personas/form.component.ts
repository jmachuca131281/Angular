import { Component, OnInit } from '@angular/core';
import { Personas } from './../personas';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  public personas: Personas = new Personas();
  constructor() { }

  ngOnInit(): void {
  }

  public create(): void {
    console.log(this.personas);
  }
}
