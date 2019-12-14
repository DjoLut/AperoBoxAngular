import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { LigneProduit } from '../Model/LigneProduit';
import { Observable } from 'rxjs';
import { Constantes } from '../Constantes';
import { AuthenticationService } from './authentication.service';

@Injectable({
  providedIn: 'root'
})
export class LigneProduitService {

  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + localStorage.getItem("access_token")
    })
  }

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

  getAllLigneProduit(): Observable<LigneProduit[]> {
    return this.http.get<LigneProduit[]>(`${Constantes.URL_API}LigneProduit`, this.httpOptions);
  }

  ajouterLigneProduit(ligneProduit: LigneProduit): Observable<LigneProduit> {
    return this.http.post<LigneProduit>(`${Constantes.URL_API}LigneProduit`, ligneProduit, this.httpOptions);
  }

  supprimerLigneProduit(ligneProduit: LigneProduit): Observable<LigneProduit> {
    return this.http.delete<LigneProduit>(`${Constantes.URL_API}LigneProduit/${ligneProduit.id}`, this.httpOptions);
  }

}
