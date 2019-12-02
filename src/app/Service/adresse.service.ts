import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Adresse } from '../Model/Adresse';
import { Observable } from 'rxjs';
import { Constantes } from '../Constantes';

@Injectable({
  providedIn: 'root'
})
export class AdresseService {

  constructor(private http: HttpClient) { }

  getAdresseById(id: number): Observable<Adresse>{
    return this.http.get<Adresse>(`${Constantes.URL_API}Adresse/${id}`);
  }

}
