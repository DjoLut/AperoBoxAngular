import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { Box } from 'src/app/Model/Box';
import { BoxService } from 'src/app/Service/box.service';
import { FormGroup, FormArray } from '@angular/forms';
import { LigneProduit } from 'src/app/Model/LigneProduit';
import { LigneProduitService } from 'src/app/Service/ligne-produit.service';
import { ProduitService } from 'src/app/Service/produit.service';

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
  ligneProduitForm: Array<LigneProduit>;

  constructor(
    private boxService: BoxService,
    private ligneProduitService: LigneProduitService
  ) { }

  ngOnInit() {
    this.box = new Box();
    this.box.ligneProduit = new Array<LigneProduit>();
  }

  remplirBoxForm() {

    //SEULEMENT SI UPDATE !!! CREATION PLUS TARD !!!
    this.boxForm = new Box();
    this.boxForm.ligneProduit = new Array<LigneProduit>();
    this.boxForm.id = this.box.id;
    this.boxForm.nom = this.editBox.get('nom').value;
    this.boxForm.prixUnitaireHtva = this.editBox.get('prixUnitaireHtva').value;
    this.boxForm.tva = this.editBox.get('tva').value;
    this.boxForm.promotion = this.editBox.get('promotion').value;
    this.boxForm.description = this.editBox.get('description').value;
    this.boxForm.photo = this.editBox.get('photo').value;
    //this.boxForm.affichable = this.editBox.get('affichable').value;
    this.boxForm.dateCreation = this.editBox.get('dateCreation').value;

    for(let i = 0; i < this.box.ligneProduit.length; i++)
      this.suppressionLigneProduit(this.box.ligneProduit[i]);

    this.remplirLigneProduitForm();
  }

  remplirLigneProduitForm() {
    for(let i = 0; i < this.listeProduit.length; i++)
    {
      var prod = this.listeProduit.at(i).get('produit').value;
      var quant = this.listeProduit.at(i).get('quantite').value;

      if(quant > 0) {
        var lp = new LigneProduit();
        lp.quantite = quant;
        lp.box = this.box.id;
        lp.produit = prod.id;
        this.ajoutLigneProduit(lp);
      }
    }
    
    this.modifBox();
  }

  get listeProduit() {
    return this.editProduit.get("listeProduit") as FormArray;
  }

  ajoutLigneProduit(ligneProduit: LigneProduit) {
    this.ligneProduitService.ajouterLigneProduit(ligneProduit).subscribe(elem => {
      ligneProduit.id = elem.id;
      this.boxForm.ligneProduit.push(ligneProduit);
    }) 
  }

  modifBox() {
    this.boxService.modifierBox(this.boxForm).subscribe(elem => {
      window.location.reload();
    }); //ERROR ETC ....
  }

  suppressionLigneProduit(ligneProduit: LigneProduit) {
    this.ligneProduitService.supprimerLigneProduit(ligneProduit).subscribe(elem => {
      ;
    })
  }

  suppressionBox(box: Box) {
    if(confirm("Voulez-vous supprimer cette box ? " + box.nom)) {
      this.boxService.supprimerBox(box).subscribe(elem => {
        window.location.reload();
      }); //ERROR ETC ..... à faire plus tard
    }
  }

}
