import { Component, OnInit, Input } from '@angular/core';
import { Box } from 'src/app/Model/Box';
import { BoxService } from 'src/app/Service/box.service';
import { FormGroup, FormArray } from '@angular/forms';
import { LigneProduit } from 'src/app/Model/LigneProduit';
import { LigneProduitService } from 'src/app/Service/ligne-produit.service';
import { Router } from '@angular/router';
import { Erreurs } from 'src/app/Erreurs';

@Component({
  selector: 'app-box-details',
  templateUrl: './box-details.component.html',
  styleUrls: ['./box-details.component.css']
})
export class BoxDetailsComponent implements OnInit {

  @Input() box: Box;
  @Input() editBox: FormGroup;
  @Input() editProduit: FormGroup;

  boxForm: Box;

  constructor(
    private boxService: BoxService,
    private ligneProduitService: LigneProduitService,
    private router: Router
  ) { }

  ngOnInit() {
    this.box = new Box();
    this.box.ligneProduit = new Array<LigneProduit>();
  }

  remplirBoxForm() {
    this.boxForm = new Box();
    this.boxForm.id = this.box.id;
    this.boxForm.nom = this.editBox.get('nom').value;
    this.boxForm.prixUnitaireHtva = this.editBox.get('prixUnitaireHtva').value;
    this.boxForm.tva = this.editBox.get('tva').value;
    this.boxForm.promotion = this.editBox.get('promotion').value;
    this.boxForm.description = this.editBox.get('description').value;
    this.boxForm.photo = this.editBox.get('photo').value;
    if(this.editBox.get('affichable').value)
      this.boxForm.affichable = 1;
    else
      this.boxForm.affichable = 0;
    this.boxForm.dateCreation = this.editBox.get('dateCreation').value;
    this.boxForm.rowVersion = this.box.rowVersion;

    for(let i = 0; i < this.box.ligneProduit.length; i++)
      this.suppressionLigneProduit(this.box.ligneProduit[i]);

    this.remplirLigneProduitForm();

    this.modifBox();
  }

  remplirLigneProduitForm() {
    for(let i = 0; i < this.listeProduit.length; i++)
    {
      var prod = this.listeProduit.at(i).get('produit').value;
      var quant = this.listeProduit.at(i).get('quantite').value;

      if(quant > 0) {
        var lp = new LigneProduit();
        lp.quantite = quant;
        lp.box = this.boxForm.id;
        lp.produit = prod.id;
        this.ajoutLigneProduit(lp);
      }
    }
  }

  get listeProduit() {
    return this.editProduit.get("listeProduit") as FormArray;
  }

  ajoutLigneProduit(ligneProduit: LigneProduit) {
    this.ligneProduitService.ajouterLigneProduit(ligneProduit).subscribe(elem => {
      ;
    },
    error => {
      Erreurs.gestionErreur(error.status);
    });
  }

  modifBox() {
    this.boxService.modifierBox(this.boxForm).subscribe(elem => {
      this.reloadPage();
    },
    error => {
      Erreurs.gestionErreur(error.status);
    });
  }

  suppressionBox(box: Box) {
    if(confirm("Voulez-vous supprimer cette box ? " + box.nom)) {
      this.boxService.supprimerBox(box).subscribe(elem => {
        this.reloadPage();
      },
      error => {
        Erreurs.gestionErreur(error.status);
      });
    }
  }

  suppressionLigneProduit(ligneProduit: LigneProduit) {
    this.ligneProduitService.supprimerLigneProduit(ligneProduit).subscribe(elem => {
      ;
    },
    error => {
      Erreurs.gestionErreur(error.status);
    });
  }

  reloadPage() {
    this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
      this.router.navigate(['/update']);
    });
  }
}