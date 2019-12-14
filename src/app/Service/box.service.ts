import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Box } from '../Model/Box';
import { Constantes } from '../Constantes';
import { AuthenticationService } from './authentication.service';

@Injectable({
  providedIn: 'root'
})
export class BoxService {

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

  getAllBox(): Observable<Box[]> {
    return this.http.get<Box[]>(`${Constantes.URL_API}Box`, this.httpOptions);
  }

  getBoxById(id: number): Observable<Box>{
    return this.http.get<Box>(`${Constantes.URL_API}Box/${id}`, this.httpOptions);
  }

  ajouterBox(box: Box): Observable<Box> {
    return this.http.post<Box>(`${Constantes.URL_API}Box`, box, this.httpOptions);
  }

  modifierBox(box: Box): Observable<Box> {
    return this.http.put<Box>(`${Constantes.URL_API}Box`, box, this.httpOptions);
  }

  supprimerBox(box: Box): Observable<Box> {
    return this.http.delete<Box>(`${Constantes.URL_API}Box/${box.id}`, this.httpOptions);
  }

}
