import { Component, OnInit } from '@angular/core';
import { UtilisateurService } from 'src/app/Service/utilisateur.service';
import { Utilisateur } from 'src/app/Model/Utilisateur';
import { Adresse } from 'src/app/Model/Adresse';
import { AdresseService } from 'src/app/Service/adresse.service';

@Component({
  selector: 'app-utilisateurs-list',
  templateUrl: './utilisateurs-list.component.html',
  styleUrls: ['./utilisateurs-list.component.css']
})
export class UtilisateursListComponent implements OnInit {

  utilisateurs: Utilisateur[];
  selectedUtilisateur: Utilisateur;
  selectedAdresse: Adresse;

  constructor(
    private utilisateurService: UtilisateurService,
    private adresseService: AdresseService
  ) { }

  ngOnInit() {
    this.utilisateurs = new Array();
    this.utilisateurService.getAllUtilisateur().subscribe((data) => {
      this.utilisateurs = data;
    });
  }

  selectUtilisateur(utilisateur: Utilisateur) {
    this.selectedUtilisateur = utilisateur;
    this.adresseService.getAdresseById(utilisateur.adresse).subscribe((data) => {
      this.selectedAdresse = data;
    });
  }

}
