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

  constructor(
    private http:HttpClient, 
    private authenticationService: AuthenticationService
  ) { }

  getAllCommentaire(): Observable<Commentaire[]> {
    return this.http.get<Commentaire[]>(`${Constantes.URL_API}Commentaire`);
  }

  supprimerCommentaire(commentaire: Commentaire): Observable<Commentaire> {
    return this.http.delete<Commentaire>(`${Constantes.URL_API}Commentaire/${commentaire.id}`);
  }

}
