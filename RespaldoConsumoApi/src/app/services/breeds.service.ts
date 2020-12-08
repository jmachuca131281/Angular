import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
 
@Injectable({
  providedIn: 'root'
})
export class BreedsService {
  private url: string = 'https://dog.ceo/api/breed/';
  constructor(private http: HttpClient) { }

  getImages(breed: string){  // Metodo para ver las imagenes
    return this.http.get(this.url + breed + '/images') // Completa la url 
  }
}
