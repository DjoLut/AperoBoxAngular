import { Injectable } from '@angular/core';
import { JwtToken } from '../Model/JwtToken';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Constantes } from '../Constantes';
import { Observable } from 'rxjs';
import { Utilisateur } from '../Model/Utilisateur';
import { LoginModel } from '../Model/LoginModel';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  private _accessToken: JwtToken;
  private timer = null;

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

  public login(loginModel: LoginModel) {
    return this.http.post<JwtToken>(`${Constantes.URL_API}Jwt`, loginModel, this.httpOptions);
  }

  public logout() {
    if(this.timer != null)
      clearTimeout(this.timer);
    this.setToken(null);
  }

  public autoLogout(temps: number) {
    if(this.isAuthenticated())
      this.timer = setTimeout(this.logout, temps);
  }

}