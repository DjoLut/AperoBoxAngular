import { Component, OnInit, Input } from '@angular/core';
import { Utilisateur } from 'src/app/Model/Utilisateur';
import { UtilisateurService } from 'src/app/Service/utilisateur.service';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Adresse } from 'src/app/Model/Adresse';
import { AdresseService } from 'src/app/Service/adresse.service';

@Component({
  selector: 'app-utilisateurs-details',
  templateUrl: './utilisateurs-details.component.html',
  styleUrls: ['./utilisateurs-details.component.css']
})
export class UtilisateursDetailsComponent implements OnInit {

  @Input() utilisateur: Utilisateur;
  @Input() adresse: Adresse;

  constructor(private utilisateurService: UtilisateurService) { }

  ngOnInit() {
  }

  suppressionUtilisateur(utilisateur: Utilisateur) {
    this.utilisateurService.supprimerUtilisateur(utilisateur).subscribe(elem => {
      window.location.reload();
    }); //ERROR ETC ..... à faire plus tard
  }

}
