import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Utilisateur } from '../Model/Utilisateur';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UtilisateurService {

  //private apiBaseUrl = "https://aperoboxapi.azurewebsites.net/api/";
  private apiBaseUrl = "https://localhost:5001/api/";

  /*private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + localStorage.getItem("access_token")
    })
  };*/

  constructor(private http:HttpClient) { }


  getAllUtilisateur(): Observable<Utilisateur[]> {
    return this.http.get<Utilisateur[]>(`${this.apiBaseUrl}Utilisateur`/*, this.httpOptions*/);
  }

  getUtilisateurById(id: number): Observable<Utilisateur> {
    return this.http.get<Utilisateur>(`${this.apiBaseUrl}Utilisateur/${id}`);
  }

}
