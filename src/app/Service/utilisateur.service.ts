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

  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type' : 'application/json'
    })
  };

  constructor(private http:HttpClient, private authenticationService: AuthenticationService) { 
    this.httpOptions = {
      headers: new HttpHeaders({
        'Content-Type' : 'application/json',
        'Authorization' : 'Bearer ' + authenticationService.getToken().access_token
      })
    };
  }

  getAllUtilisateur(): Observable<Utilisateur[]> {
    return this.http.get<Utilisateur[]>(`${Constantes.URL_API}Utilisateur`, this.httpOptions);
  }

  getUtilisateurById(id: number): Observable<Utilisateur> {
    return this.http.get<Utilisateur>(`${Constantes.URL_API}Utilisateur/${id}`, this.httpOptions);
  }

  getUtilisateurByUsername(username: string): Observable<Utilisateur> {
    return this.http.get<Utilisateur>(`${Constantes.URL_API}Utilisateur/${username}`, this.httpOptions)
  }

  getUtilisateurByMail(mail: string): Observable<Utilisateur> {
    return this.http.get<Utilisateur>(`${Constantes.URL_API}Utilisateur/${mail}`, this.httpOptions)
  }

  modifierUtilisateur(utilisateur: Utilisateur): Observable<Utilisateur> {
    return this.http.put<Utilisateur>(`${Constantes.URL_API}Utilisateur`, utilisateur, this.httpOptions);
  }

  supprimerUtilisateur(utilisateur: Utilisateur): Observable<Utilisateur> {
    return this.http.delete<Utilisateur>(`${Constantes.URL_API}Utilisateur/${utilisateur.id}`, this.httpOptions);
  }

}