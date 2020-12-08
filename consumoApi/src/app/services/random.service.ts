import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class RandomService {
  private url: string = 'https://dog.ceo/api/breeds/image/r';
  constructor(private http: HttpClient) { }

  getImages(image: string){ // Metodo para ver las imagenes
    return this.http.get(this.url + image + '/random') // Completa la URL
  }

}
