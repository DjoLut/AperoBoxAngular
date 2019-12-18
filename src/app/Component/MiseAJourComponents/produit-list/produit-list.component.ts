import { Component, OnInit, Input } from '@angular/core';
import { Produit } from 'src/app/Model/Produit';
import { ProduitService } from 'src/app/Service/produit.service';
import { Box } from 'src/app/Model/Box';
import { FormGroup, FormArray } from '@angular/forms';
import { Erreurs } from 'src/app/Erreurs';

@Component({
  selector: 'app-produit-list',
  templateUrl: './produit-list.component.html',
  styleUrls: ['./produit-list.component.css']
})
export class ProduitListComponent implements OnInit {

  @Input() box: Box;
  @Input() editProduit: FormGroup;
  produits: Produit[];

  constructor(private produitService: ProduitService) { }

  ngOnInit() {
    this.produits = new Array();
    this.produitService.getAllProduit().subscribe((data) => {
      this.produits = data;
    },
    error => {
      Erreurs.gestionErreur(error.status);
    });
  }

  get listeProduit() {
    return this.editProduit.get("listeProduit") as FormArray;
  }

}
