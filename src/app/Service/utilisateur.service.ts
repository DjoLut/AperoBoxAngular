import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Utilisateur } from '../Model/Utilisateur';
import { Observable } from 'rxjs';
import { Constantes } from '../Constantes';
import { AuthenticationService } from './authentication.service';

@Injectable({
  providedIn: 'root'
})
export class UtilisateurService {

  constructor(private http:HttpClient) { }

  getAllUtilisateur(): Observable<Utilisateur[]> {
    return this.http.get<Utilisateur[]>(`${Constantes.URL_API}Utilisateur`);
  }

  getUtilisateurById(id: number): Observable<Utilisateur> {
    return this.http.get<Utilisateur>(`${Constantes.URL_API}Utilisateur/${id}`);
  }

  getUtilisateurByUsername(username: string): Observable<Utilisateur> {
    return this.http.get<Utilisateur>(`${Constantes.URL_API}Utilisateur/${username}`)
  }

  getUtilisateurByMail(mail: string): Observable<Utilisateur> {
    return this.http.get<Utilisateur>(`${Constantes.URL_API}Utilisateur/${mail}`)
  }

  modifierUtilisateur(utilisateur: Utilisateur): Observable<Utilisateur> {
    return this.http.put<Utilisateur>(`${Constantes.URL_API}Utilisateur/${utilisateur.id}`, utilisateur);
  }

  supprimerUtilisateur(utilisateur: Utilisateur): Observable<Utilisateur> {
    return this.http.delete<Utilisateur>(`${Constantes.URL_API}Utilisateur/${utilisateur.id}`);
  }

}