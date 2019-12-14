import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Commentaire } from '../Model/Commentaire';
import { Observable } from 'rxjs';
import { Constantes } from '../Constantes';
import { AuthenticationService } from './authentication.service';

@Injectable({
  providedIn: 'root'
})
export class CommentaireService {

  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type' : 'application/json',
      'Authorization': 'Bearer ' + localStorage.getItem("access_token")
    })
  };

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

  getAllCommentaire(): Observable<Commentaire[]> {
    return this.http.get<Commentaire[]>(`${Constantes.URL_API}Commentaire`, this.httpOptions);
  }

  supprimerCommentaire(commentaire: Commentaire): Observable<Commentaire> {
    return this.http.delete<Commentaire>(`${Constantes.URL_API}Commentaire/${commentaire.id}`, this.httpOptions);
  }

}
