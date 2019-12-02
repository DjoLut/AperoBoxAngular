import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Utilisateur } from '../Model/Utilisateur';
import { Observable } from 'rxjs';
import { Constantes } from '../Constantes';

@Injectable({
  providedIn: 'root'
})
export class UtilisateurService {

  /*private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + localStorage.getItem("access_token")
    })
  };*/

  constructor(private http:HttpClient) { }


  getAllUtilisateur(): Observable<Utilisateur[]> {
    return this.http.get<Utilisateur[]>(`${Constantes.URL_API}Utilisateur`/*, this.httpOptions*/);
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

  supprimerUtilisateur(utilisateur: Utilisateur): Observable<Utilisateur> {
    return this.http.delete<Utilisateur>(`${Constantes.URL_API}Utilisateur/${utilisateur.id}`);
  }

}