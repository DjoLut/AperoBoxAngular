import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Utilisateur } from '../Model/Utilisateur';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UtilisateurService {

  private apiBaseUrl = "https://aperoboxapi.azurewebsites.net/";
  private apiKey = "ec863d96-5615-4f79-84c8-dde2c355c5c5";

  constructor(private http:HttpClient) { }


  getAllUtilisateur(): Observable<Utilisateur> {
    return this.http.get<Utilisateur>(`${this.apiBaseUrl}utilisateur&APPID=${this.apiKey}`);
  }

}
