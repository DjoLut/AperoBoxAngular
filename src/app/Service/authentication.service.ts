import { Injectable } from '@angular/core';
import { JwtToken } from '../Model/JwtToken';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Constantes } from '../Constantes';
import { Observable } from 'rxjs';
import { Utilisateur } from '../Model/Utilisateur';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  private _accessToken: JwtToken;
  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  constructor(private http: HttpClient) { }

  public setToken(token: JwtToken) {
    this._accessToken = token;
  }

  public getToken(): JwtToken {
    return this._accessToken;
  }

  public isAuthenticated(): boolean {
    return this._accessToken !== null && this._accessToken!==undefined;
  }

  public login(username: string, password: string) {
    let body = "{\n" +
      "\t\"Username\":\""+username+"\",\n" +
      "\t\"Password\":\""+password+"\"\n" +
    "}";
    return this.http.post<JwtToken>(`${Constantes.URL_API}Jwt`, body, this.httpOptions);
  }

  public logout() {
    this.setToken(null);
  }

}