import { Component, OnInit, Input } from '@angular/core';
import { Utilisateur } from 'src/app/Model/Utilisateur';
import { UtilisateurService } from 'src/app/Service/utilisateur.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Adresse } from 'src/app/Model/Adresse';
import { AdresseService } from 'src/app/Service/adresse.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { InvokeFunctionExpr } from '@angular/compiler';

@Component({
  selector: 'app-utilisateurs-details',
  templateUrl: './utilisateurs-details.component.html',
  styleUrls: ['./utilisateurs-details.component.css']
})
export class UtilisateursDetailsComponent implements OnInit {

  @Input() utilisateur: Utilisateur;
  @Input() adresse: Adresse;
  @Input() editUtilisateur: FormGroup;
  @Input() editAdresse: FormGroup;

  utilisateurForm: Utilisateur;
  adresseForm: Adresse;

  adresses: Adresse[];

  constructor(
    private utilisateurService: UtilisateurService,
    private adresseService: AdresseService
  ) { }

  ngOnInit() {
    this.utilisateur = new Utilisateur();
    this.adresse = new Adresse();
  }

  remplirUtilisateurForm(): void {
    this.utilisateurForm = new Utilisateur();
    this.utilisateurForm.id = this.utilisateur.id;
    this.utilisateurForm.nom = this.editUtilisateur.get("nom").value;
    this.utilisateurForm.prenom = this.editUtilisateur.get("prenom").value;
    this.utilisateurForm.dateNaissance = this.editUtilisateur.get("dateNaissance").value;
    this.utilisateurForm.mail = this.editUtilisateur.get("mail").value;
    if(this.editUtilisateur.get("telephone").value == 0 || this.editUtilisateur.get("telephone").value == '')
      this.utilisateurForm.telephone = null;
    else
      this.utilisateurForm.telephone = this.editUtilisateur.get("telephone").value;
    this.utilisateurForm.gsm = this.editUtilisateur.get("gsm").value;
    this.utilisateurForm.username = this.editUtilisateur.get("username").value;

    this.remplirAdresseForm();
  }

  remplirAdresseForm() {
    this.adresseForm = new Adresse();
    
    if(this.adresse.rue.toLocaleLowerCase() == this.editAdresse.get("rue").value.toLocaleLowerCase() &&
    this.adresse.numero == this.editAdresse.get("numero").value &&
    this.adresse.localite.toLocaleLowerCase() == this.editAdresse.get("localite").value.toLocaleLowerCase() &&
    this.adresse.codePostal == this.editAdresse.get("codePostal").value &&
    this.adresse.pays.toLocaleLowerCase() == this.editAdresse.get("pays").value.toLocaleLowerCase())
    {
      this.utilisateurForm.adresse = this.utilisateur.adresse;
    }
    else
    {
      //if(adresse not exist) !!!!!!
      this.adresseForm.rue = this.editAdresse.get("rue").value;
      this.adresseForm.numero = this.editAdresse.get("numero").value;
      this.adresseForm.localite = this.editAdresse.get("localite").value;
      this.adresseForm.codePostal = this.editAdresse.get("codePostal").value;
      this.adresseForm.pays = this.editAdresse.get("pays").value;

      this.ajouterAdresse();
    }
  }

  adresseExist()
  {
    this.adresseService.getAllAdresses().subscribe(data => {
      this.adresses = data;
    });
  }

  modifierUtilisateur() {
    this.utilisateurService.modifierUtilisateur(this.utilisateurForm).subscribe(elem => {
      window.location.reload();
    }); //ERROR ETC ....
  }

  ajouterAdresse() {
    this.adresseService.ajouterAdresse(this.adresseForm).subscribe(elem => {
      this.utilisateurForm.adresse = elem.id;
      this.modifierUtilisateur();
    }); //ERROR ETC ....
  }

  suppressionUtilisateur(utilisateur: Utilisateur) {
    this.utilisateurService.supprimerUtilisateur(utilisateur).subscribe(elem => {
      window.location.reload();
    }); //ERROR ETC ..... à faire plus tard
  }

}
