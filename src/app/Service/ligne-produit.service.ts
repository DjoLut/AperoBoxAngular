import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { LigneProduit } from '../Model/LigneProduit';
import { Observable } from 'rxjs';
import { Constantes } from '../Constantes';

@Injectable({
  providedIn: 'root'
})
export class LigneProduitService {

  /*private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }*/

  constructor(private http:HttpClient) { }

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
