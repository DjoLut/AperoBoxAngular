import { Component, OnInit } from '@angular/core';
import { UtilisateurService } from 'src/app/Service/utilisateur.service';
import { Utilisateur, UtilisateurRole } from 'src/app/Model/Utilisateur';
import { Adresse } from 'src/app/Model/Adresse';
import { AdresseService } from 'src/app/Service/adresse.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Erreurs } from 'src/app/Erreurs';

@Component({
  selector: 'app-utilisateurs-list',
  templateUrl: './utilisateurs-list.component.html',
  styleUrls: ['./utilisateurs-list.component.css']
})
export class UtilisateursListComponent implements OnInit {

  utilisateurs: Utilisateur[];
  selectedUtilisateur: Utilisateur;
  selectedAdresse: Adresse;
  utilisateurRole: UtilisateurRole[];
  selectedIndex: number = null;

  editUtilisateur = new FormGroup({
    nom: new FormControl('', [Validators.required, Validators.minLength(2), Validators.maxLength(100)]),
    prenom: new FormControl('', [Validators.required, Validators.minLength(2), Validators.maxLength(100)]),
    dateNaissance: new FormControl('yyyy-MM-dd', Validators.required),
    mail: new FormControl('', [Validators.required, Validators.email, Validators.minLength(3), Validators.maxLength(150)]),
    telephone: new FormControl('', [Validators.pattern('^[0-9]*$'), Validators.maxLength(9), Validators.minLength(9)]),
    gsm: new FormControl('', [Validators.pattern('^[0-9]*$'), Validators.maxLength(10), Validators.minLength(10), Validators.required]),
    username: new FormControl('', [Validators.required, Validators.minLength(2), Validators.maxLength(100)]),
    rowversion: new FormControl('')
  });

  editAdresse = new FormGroup({
    rue: new FormControl('', [Validators.required, Validators.minLength(5), Validators.maxLength(150)]),
    numero: new FormControl('', [Validators.pattern('^[0-9]*$'), Validators.required, Validators.min(1), Validators.max(9999)]),
    localite: new FormControl('', [Validators.required, Validators.minLength(2), Validators.maxLength(50)]),
    codePostal: new FormControl('', [Validators.pattern('^[0-9]*$'), Validators.required, Validators.min(10), Validators.max(999999)]),
    pays: new FormControl('', [Validators.required, Validators.minLength(2), Validators.maxLength(50)])
  });

  editRole = new FormGroup({
    admin: new FormControl(false)
  });

  constructor(
    private utilisateurService: UtilisateurService,
    private adresseService: AdresseService
  ) { }

  ngOnInit() {
    this.utilisateurs = new Array();
    this.utilisateurService.getAllUtilisateur().subscribe((data) => {
      this.utilisateurs = data;
    },
    error => {
      Erreurs.gestionErreur(error.status);
    });
  }

  selectUtilisateur(utilisateur: Utilisateur, index: number) {
    this.selectedUtilisateur = utilisateur;

    this.adresseService.getAdresseById(utilisateur.adresse).subscribe(data => {
        this.selectedAdresse = data;
        this.remplirFormulaire(utilisateur);
    },
    error => {
      Erreurs.gestionErreur(error.status);
    });
    this.selectedIndex = index;
  }

  remplirFormulaire(utilisateur: Utilisateur) {
    var telephone;
    if(utilisateur.telephone != null)
      telephone = "0" + utilisateur.telephone;
    else
      telephone = utilisateur.telephone;
    let date: Date = new Date(utilisateur.dateNaissance);
    this.editUtilisateur.patchValue({
      nom: utilisateur.nom,
      prenom: utilisateur.prenom,
      dateNaissance: date.toISOString().substring(0,10),
      mail: utilisateur.mail,
      telephone: telephone,
      gsm: "0" + utilisateur.gsm,
      username: utilisateur.username,
      rowversion: utilisateur.rowVersion
    })

    this.editAdresse.patchValue({
      rue: this.selectedAdresse.rue,
      numero: this.selectedAdresse.numero,
      localite: this.selectedAdresse.localite,
      codePostal: this.selectedAdresse.codePostal,
      pays: this.selectedAdresse.pays
    })

    this.editRole.patchValue({
      admin: false
    })
    for(var i = 0; i < utilisateur.utilisateurRole.length; i++)
    {
      if(utilisateur.utilisateurRole[i].idRole == "admin")
      {
        this.editRole.get("admin").setValue(true);
      }
    }
  }

}
