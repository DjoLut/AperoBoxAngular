import { Component, OnInit, Input } from '@angular/core';
import { Utilisateur } from 'src/app/Model/Utilisateur';
import { UtilisateurService } from 'src/app/Service/utilisateur.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Adresse } from 'src/app/Model/Adresse';
import { AdresseService } from 'src/app/Service/adresse.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-utilisateurs-details',
  templateUrl: './utilisateurs-details.component.html',
  styleUrls: ['./utilisateurs-details.component.css']
})
export class UtilisateursDetailsComponent implements OnInit {

  @Input() utilisateur: Utilisateur;
  @Input() adresse: Adresse;

  editUtilisateur = new FormGroup({
    nom: new FormControl('', Validators.required),
    prenom: new FormControl('', Validators.required),
    dateNaissance: new FormControl('', Validators.required),
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

  utilisateurForm: Utilisateur;
  adresseForm: Adresse;

  constructor(
    private utilisateurService: UtilisateurService,
    private adresseService: AdresseService
  ) { }

  ngOnInit() {
    this.utilisateur = new Utilisateur();
    this.adresse = new Adresse();
  }

  modifierUtilisateur(): void {
    this.utilisateurForm = new Utilisateur();
    this.utilisateurForm.id = this.utilisateur.id;
    
    if(this.editUtilisateur.get("nom").value != '')
      this.utilisateurForm.nom = this.editUtilisateur.get("nom").value;
    else
      this.utilisateurForm.nom = this.utilisateur.nom;

    if(this.editUtilisateur.get("prenom").value != '')
      this.utilisateurForm.prenom = this.editUtilisateur.get("prenom").value;
    else
      this.utilisateurForm.prenom = this.utilisateur.prenom;

    if(this.editUtilisateur.get("dateNaissance").value != '')
      this.utilisateurForm.dateNaissance = this.editUtilisateur.get("dateNaissance").value;
    else
      this.utilisateurForm.dateNaissance = this.utilisateur.dateNaissance;
    
    if(this.editUtilisateur.get("mail").value != '')
      this.utilisateurForm.mail = this.editUtilisateur.get("mail").value;
    else
      this.utilisateurForm.mail = this.utilisateur.mail;
    
    if(this.editUtilisateur.get("telephone").value == 0 || this.editUtilisateur.get("telephone").value == '')
      this.utilisateurForm.telephone = null;
    else
      this.utilisateurForm.telephone = this.editUtilisateur.get("telephone").value;
    
    if(this.editUtilisateur.get("gsm").value != '')
      this.utilisateurForm.gsm = this.editUtilisateur.get("gsm").value;
    else
      this.utilisateurForm.gsm = this.utilisateur.gsm;
    
    if(this.editUtilisateur.get("username").value != '')
      this.utilisateurForm.username = this.editUtilisateur.get("username").value;
    else
      this.utilisateurForm.username = this.utilisateur.username;
    
    //this.utilisateurForm.adresse = this.utilisateur.adresse;

    this.ajoutModifAdresse();

    this.utilisateurService.modifierUtilisateur(this.utilisateurForm).subscribe(elem => {
      window.location.reload();
    }); //ERROR ETC ....
  }

  ajoutModifAdresse() {
    this.adresseForm = new Adresse();

    if(this.editAdresse.get("rue").value == '')
      this.editAdresse.get("rue").setValue(this.adresse.rue);

    if(this.editAdresse.get("numero").value == '')
      this.editAdresse.get("numero").setValue(this.adresse.numero);
    
    if(this.editAdresse.get("localite").value == '')
      this.editAdresse.get("localite").setValue(this.adresse.localite);
    
    if(this.editAdresse.get("codePostal").value == '')
      this.editAdresse.get("codePostal").setValue(this.adresse.codePostal);
    
    if(this.editAdresse.get("pays").value == '')
      this.editAdresse.get("pays").setValue(this.adresse.pays);
    
    if(this.adresse.rue == this.editAdresse.get("rue").value &&
    this.adresse.numero == this.editAdresse.get("numero").value &&
    this.adresse.localite == this.editAdresse.get("localite").value &&
    this.adresse.codePostal == this.editAdresse.get("codePostal").value &&
    this.adresse.pays == this.editAdresse.get("pays").value)
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

      this.adresseService.ajouterAdresse(this.adresseForm).subscribe(elem => {
        this.utilisateurForm.adresse = elem.id;
      }); //ERROR ETC ....
    }
  }

  suppressionUtilisateur(utilisateur: Utilisateur) {
    this.utilisateurService.supprimerUtilisateur(utilisateur).subscribe(elem => {
      window.location.reload();
    }); //ERROR ETC ..... à faire plus tard
  }

}
