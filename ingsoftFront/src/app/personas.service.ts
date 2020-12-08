import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Personas } from './personas';


@Injectable({
  providedIn: 'root'
})
export class PersonasService {
  public url: string = 'http://localhost:8014/api/personas'; // definir endpoint del servicio

  constructor(private http: HttpClient) { }
  getPersonas(): Observable<Personas[]> {
    return this.http.get<Personas[]>(this.url);
  }
}
