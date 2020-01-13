import { Injectable } from '@angular/core';
import { JwtToken } from '../Model/JwtToken';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Constantes } from '../Constantes';
import { Observable } from 'rxjs';
import { Utilisateur } from '../Model/Utilisateur';
import { LoginModel } from '../Model/LoginModel';
import { Router } from '@angular/router';

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

  constructor(
    private http: HttpClient,
    private router: Router
  ) { }

  public setToken(token: JwtToken) {
    this._accessToken = token;
    if(token != null)
      this.timer = window.setTimeout(() => { this.logout(); }, (token.expires_in * 1000));
    else
      clearTimeout(this.timer);
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
      alert("Déconnection ! (Session expirée) ");

    this.setToken(null);
    this.router.navigate(["/accueil"]);
  }


}