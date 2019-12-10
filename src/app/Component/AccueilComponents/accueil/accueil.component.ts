import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthenticationService } from 'src/app/Service/authentication.service';
import { Router } from '@angular/router';

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
      this.router.navigate(["/utilisateur"]);
    });
  }

}
