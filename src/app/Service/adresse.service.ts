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

  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type' : 'application/json',
      'Authorization': 'Bearer ' + localStorage.getItem("access_token")
    })
  };

  constructor(
    private http:HttpClient, 
    private authenticationService: AuthenticationService
  ) { 
    this.httpOptions = {
      headers: new HttpHeaders({
        'Content-Type' : 'application/json',
        'Authorization' : 'Bearer ' + authenticationService.getToken().access_token
      })
    };
  }

  getAllAdresses(): Observable<Adresse[]> {
    return this.http.get<Adresse[]>(`${Constantes.URL_API}Adresse`, this.httpOptions);
  }

  getAdresseById(id: number): Observable<Adresse>{
    return this.http.get<Adresse>(`${Constantes.URL_API}Adresse/${id}`, this.httpOptions);
  }

  ajouterAdresse(adresse: Adresse): Observable<Adresse> {
    return this.http.post<Adresse>(`${Constantes.URL_API}Adresse`, adresse, this.httpOptions);
  }

}
