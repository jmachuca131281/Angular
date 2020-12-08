import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

 
@Injectable({
  providedIn: 'root'
})
export class BreedsService {
  private url: string = 'https://dog.ceo/api/breed/';
  private urlRandom: string = 'https://dog.ceo/api/breeds/image/random';  // Se agrega y se asigna la url que quermos agregar

  constructor(private http: HttpClient) { }

  getImages(breed: string){  // Metodo para ver las imagenes
    return this.http.get(this.url + breed + '/images') // Completa la url 
  }

  getRandomImage(){   // Se agrega esta función para tomar el contenido del json
    return this.http.get(this.urlRandom);
  }
}
