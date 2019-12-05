import { Component, OnInit } from '@angular/core';
import { UtilisateurService } from 'src/app/Service/utilisateur.service';
import { Utilisateur } from 'src/app/Model/Utilisateur';
import { Adresse } from 'src/app/Model/Adresse';
import { AdresseService } from 'src/app/Service/adresse.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { formatDate } from '@angular/common';

@Component({
  selector: 'app-utilisateurs-list',
  templateUrl: './utilisateurs-list.component.html',
  styleUrls: ['./utilisateurs-list.component.css']
})
export class UtilisateursListComponent implements OnInit {

  utilisateurs: Utilisateur[];
  selectedUtilisateur: Utilisateur;
  selectedAdresse: Adresse;

  editUtilisateur = new FormGroup({
    nom: new FormControl('', Validators.required),
    prenom: new FormControl('', Validators.required),
    dateNaissance: new FormControl('yyyy-MM-dd', Validators.required),
    mail: new FormControl('', [Validators.required, Validators.email]),
    telephone: new FormControl(''),
    gsm: new FormControl('', Validators.required),
    username: new FormControl('', Validators.required)
  });

  editAdresse = new FormGroup({
    rue: new FormControl('', Validators.required),
    numero: new FormControl('', Validators.required),
    localite: new FormControl('', Validators.required),
    codePostal: new FormControl('', Validators.required),
    pays: new FormControl('', Validators.required),
  });

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
    this.adresseService.getAdresseById(utilisateur.adresse).subscribe(data => {
        this.selectedAdresse = data;
        this.remplirFormulaire(utilisateur);
    });
  }

  remplirFormulaire(utilisateur: Utilisateur) {
    let date: Date = new Date(utilisateur.dateNaissance);
    this.editUtilisateur.patchValue({
      nom: utilisateur.nom,
      prenom: utilisateur.prenom,
      dateNaissance: date.toISOString().substring(0,10),
      mail: utilisateur.mail,
      telephone: utilisateur.telephone,
      gsm: utilisateur.gsm,
      username: utilisateur.username
    })

    this.editAdresse.patchValue({
      rue: this.selectedAdresse.rue,
      numero: this.selectedAdresse.numero,
      localite: this.selectedAdresse.localite,
      codePostal: this.selectedAdresse.codePostal,
      pays: this.selectedAdresse.pays
    })
  }

}
