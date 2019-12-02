import { Component, OnInit } from '@angular/core';
import { BoxService } from 'src/app/Service/box.service';
import { Box } from 'src/app/Model/Box';
import { Router } from '@angular/router';
import { Produit } from 'src/app/Model/Produit';
import { LigneProduit } from 'src/app/Model/LigneProduit';
import { ProduitService } from 'src/app/Service/produit.service';

@Component({
  selector: 'app-box-list',
  templateUrl: './box-list.component.html',
  styleUrls: ['./box-list.component.css']
})
export class BoxListComponent implements OnInit {

  boxes: Box[];
  selectedBox: Box;
  produits: Produit[];

  constructor(
    private boxService: BoxService,
    private produitService: ProduitService,
    private router: Router
  ) { }

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

  selectBox(box: Box) {
    this.selectedBox = box;
    this.produitService.completeListeProduitQuantite(this.produits, box);
  }

  ajouterBox() {
  }

}
