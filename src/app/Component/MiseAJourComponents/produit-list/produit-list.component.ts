import { Component, OnInit, Input } from '@angular/core';
import { Produit } from 'src/app/Model/Produit';
import { ProduitService } from 'src/app/Service/produit.service';
import { Box } from 'src/app/Model/Box';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-produit-list',
  templateUrl: './produit-list.component.html',
  styleUrls: ['./produit-list.component.css']
})
export class ProduitListComponent implements OnInit {

  @Input() box: Box;
  produits: Produit[];
  
  listeProduitQuantite: Array<{produit:Produit, quantite:number}>;

  constructor(private produitService: ProduitService) { }

  ngOnInit() {
    this.produits = new Array();
    this.produitService.getAllProduit().subscribe((data) => {
      this.produits = data;
    });

    this.listeProduitQuantite = this.produitService.listeProduitQuantite;
  } 

}
