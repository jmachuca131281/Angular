import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  nombre: string = 'Rodriguez Pablo';
  edad: number = 40;
  email: string = 'rpablo@gmail.com';
  sueldos: any[] = [1700, 1600, 1900];
  activo: boolean = true;
  sitio: string = 'http://www.google.com';
  contador: number = 1;

  esActivo() {
    if (this.activo)
      return 'Trabajador activo'
    else
      return 'Trabajador inactivo'
  }

  ultimos3Sueldos() {
    let suma: number = 0;
    for (let index = 0; index < this.sueldos.length; index++) {
      suma+=this.sueldos[index];
      return suma; 
    }
  }

  incrementar() {
    this.contador++;
  }
  decrementar() {
    this.contador--;
  }
}
