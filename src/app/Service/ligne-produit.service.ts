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

  constructor(
    private http:HttpClient, 
    private authenticationService: AuthenticationService
  ) { }

  getAllLigneProduit(): Observable<LigneProduit[]> {
    return this.http.get<LigneProduit[]>(`${Constantes.URL_API}LigneProduit`);
  }

  ajouterLigneProduit(ligneProduit: LigneProduit): Observable<LigneProduit> {
    return this.http.post<LigneProduit>(`${Constantes.URL_API}LigneProduit`, ligneProduit);
  }

  supprimerLigneProduit(ligneProduit: LigneProduit): Observable<LigneProduit> {
    return this.http.delete<LigneProduit>(`${Constantes.URL_API}LigneProduit/${ligneProduit.id}`);
  }

}
