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
  private apiKey = "ec863d96-5615-4f79-84c8-dde2c355c5c5";


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

}
