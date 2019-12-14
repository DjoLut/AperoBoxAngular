import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthenticationService } from 'src/app/Service/authentication.service';
import { Router } from '@angular/router';
import { Erreurs } from 'src/app/Erreurs';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.css']
})
export class AccueilComponent implements OnInit {

  loginForm = new FormGroup({
    UserName: new FormControl(null, Validators.required),
    Password: new FormControl(null, Validators.required)
  })

  constructor(
    private authenticationService: AuthenticationService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  login() {
    var username = this.loginForm.get('UserName').value;
    var password = this.loginForm.get('Password').value;
    this.authenticationService.login(username, password).subscribe(frm => {
      this.authenticationService.setToken(frm);
      this.router.navigate(["/accueil"]);
      localStorage.setItem("access_token", frm.access_token);
    },
    error => {
      this.gestionErreur(error.status);
    });
  }

  estAuthentifier() {
    return this.authenticationService.isAuthenticated();
  }

  logout() {
    this.authenticationService.logout();
    localStorage.removeItem("access_token");
  }

  gestionErreur(error: number) {
    if(error == 401)
      alert("Nom d'utilisateur et/ou mot de passe incorrect(s) !");
    else
      Erreurs.gestionErreur(error);
  }

}
