import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Adresse } from '../Model/Adresse';
import { Observable } from 'rxjs';
import { Constantes } from '../Constantes';
import { AuthenticationService } from './authentication.service';

@Injectable({
  providedIn: 'root'
})
export class AdresseService {

  constructor(
    private http:HttpClient, 
    private authenticationService: AuthenticationService
  ) { }

  getAllAdresses(): Observable<Adresse[]> {
    return this.http.get<Adresse[]>(`${Constantes.URL_API}Adresse`);
  }

  getAdresseById(id: number): Observable<Adresse>{
    return this.http.get<Adresse>(`${Constantes.URL_API}Adresse/${id}`);
  }

  ajouterAdresse(adresse: Adresse): Observable<Adresse> {
    return this.http.post<Adresse>(`${Constantes.URL_API}Adresse`, adresse);
  }

}
