import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Commentaire } from '../Model/Commentaire';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommentaireService {

  //private apiBaseUrl = "https://aperoboxapi.azurewebsites.net/api/";
  private apiBaseUrl = "https://localhost:5001/api/";


  constructor(private http: HttpClient) { }

  getAllCommentaire(): Observable<Commentaire[]> {
    return this.http.get<Commentaire[]>(`${this.apiBaseUrl}Commentaire`);
  }


}
