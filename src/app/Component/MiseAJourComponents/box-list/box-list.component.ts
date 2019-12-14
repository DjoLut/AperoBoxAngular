import { Component, OnInit } from '@angular/core';
import { BoxService } from 'src/app/Service/box.service';
import { Box } from 'src/app/Model/Box';
import { Router } from '@angular/router';
import { Produit } from 'src/app/Model/Produit';
import { ProduitService } from 'src/app/Service/produit.service';
import { FormGroup, FormControl, Validators, FormArray, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-box-list',
  templateUrl: './box-list.component.html',
  styleUrls: ['./box-list.component.css']
})
export class BoxListComponent implements OnInit {

  boxes: Box[];
  selectedBox: Box;
  produits: Produit[];
  selectedIndex: number = null;

  nouvelleBox: Box;

  editBox = new FormGroup({
    id: new FormControl(),
    nom: new FormControl('', [Validators.required, Validators.minLength(2)]),
    prixUnitaireHtva: new FormControl('', [Validators.required, Validators.min(0)]),
    tva: new FormControl('yyyy-MM-dd', [Validators.required, Validators.max(1), Validators.min(0)]),
    promotion: new FormControl('', [Validators.max(1), Validators.min(0)]),
    description: new FormControl('', [Validators.required, Validators.minLength(2)]),
    photo: new FormControl('', Validators.required),
    affichable: new FormControl(),
    dateCreation: new FormControl('yyyy-MM-dd', Validators.required),
    rowversion: new FormControl('')
  });

  editProduit: FormGroup;

  constructor(
    private boxService: BoxService,
    private produitService: ProduitService,
    private router: Router,
    private fb: FormBuilder) 
  { 
    this.editProduit = this.fb.group({
      listeProduit: this.fb.array([])
    })
  }

  ngOnInit() {
    this.boxes = new Array();
    this.boxService.getAllBox().subscribe((data) => {
      this.boxes = data;
    });

    this.produits = new Array();
    this.produitService.getAllProduit().subscribe((data) => {
      this.produits = data;
    });
  }

  isUpdateRoute() {
    return this.router.url === '/update';
  }

  isCommentaireRoute() {
    return this.router.url === '/commentaire';
  }

  selectBox(box: Box, index: number) {
    this.selectedBox = box;
    this.selectedIndex = index;

    if(this.isUpdateRoute())
    {
      this.produitService.completeListeProduitQuantite(this.produits, box);
      this.remplirFormulaire(box);
    }
  }

  remplirFormulaire(box: Box) {
    let date: Date;
    if(box.dateCreation != null)
      date = new Date(box.dateCreation);
    else
      date = new Date();
    this.editBox.patchValue({
      nom: box.nom,
      prixUnitaireHtva: box.prixUnitaireHtva,
      tva: box.tva,
      promotion: box.promotion,
      description: box.description,
      photo: box.photo,
      affichable: box.affichable,
      dateCreation: date.toISOString().substring(0,10),
      rowversion: box.rowVersion
    })

    this.listeProduit.clear();
    for(let i = 0; i < this.produitService.listeProduitQuantite.length; i++) {
      this.listeProduit.push(
        this.fb.group({
          produit: new FormGroup({
            id: new FormControl(this.produitService.listeProduitQuantite[i].produit.id),
            prixUnitaireHtva: new FormControl(this.produitService.listeProduitQuantite[i].produit.prixUnitaireHtva),
            tva: new FormControl(this.produitService.listeProduitQuantite[i].produit.tva),
            nom: new FormControl({value: this.produitService.listeProduitQuantite[i].produit.nom, disabled: true}),
            datePremption: new FormControl(this.produitService.listeProduitQuantite[i].produit.datePeremption),
            alcool: new FormControl(this.produitService.listeProduitQuantite[i].produit.alcool)
          }),
          quantite: new FormControl(this.produitService.listeProduitQuantite[i].quantite, [Validators.required, Validators.min(0)])
        }));
    }
  }

  get listeProduit() {
    return this.editProduit.get("listeProduit") as FormArray;
  }

  ajoutBox() {
    if(confirm("Voulez-vous ajouter une nouvelle box ? Vous pourrez modifier celle-ci après la création")) {
      this.nouvelleBox = new Box();
      this.nouvelleBox.nom = "Nouvelle Box";
      this.nouvelleBox.prixUnitaireHtva = 0;
      this.nouvelleBox.tva = 0;
      this.nouvelleBox.promotion = null;
      this.nouvelleBox.description = "Description Nouvelle Box";
      this.nouvelleBox.photo = "img.jpeg";
      this.nouvelleBox.affichable = 0;
      this.nouvelleBox.dateCreation = new Date();
      this.boxService.ajouterBox(this.nouvelleBox).subscribe(elem => {
        this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
          this.router.navigate(['/update']);
        });
      });
    }
  }

}
