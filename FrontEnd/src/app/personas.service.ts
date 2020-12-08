import { Personas } from './personas'; // Importamos la clase personas
// import { HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs'; // Import the observable from RxJS, observable is a class of librey RxJS

@Injectable({
  providedIn: 'root'
})
export class PersonasService {
  // Definir endPoint de servicio
  private url:string = 'http://localhost:8014/api/personas';

  constructor(private http: HttpClient) {} // Injecta 

    // Get personas from de server
    getPersonas(): Observable<Personas[]> { // Verifica las conexiones y cualquier cambio que ocurra es actualizado
      return this.http.get<Personas[]>(this.url);
    }
}
