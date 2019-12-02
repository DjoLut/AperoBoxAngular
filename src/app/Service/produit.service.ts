import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Produit } from '../Model/Produit';
import { Constantes } from '../Constantes';
import { Box } from '../Model/Box';

@Injectable({
  providedIn: 'root'
})
export class ProduitService {

  listeProduitQuantite:Array<{produit:Produit, quantite:number}>;
  estTrouve:boolean;

  constructor(private http:HttpClient) { }

  getAllProduit(): Observable<Produit[]> {
    return this.http.get<Produit[]>(`${Constantes.URL_API}Produit`);
  }

  getAllListeProduitQuantite() {
    return this.listeProduitQuantite;
  }

  completeListeProduitQuantite(produits: Produit[], box: Box) {
    this.listeProduitQuantite = new Array<{produit:Produit, quantite:number}>();
    produits.forEach(prod => {
      if(box==null)
      this.listeProduitQuantite.push({produit: prod, quantite: 0});
      prod.ligneProduit.forEach(lp => {
        if(lp.box.id == box.id)
        {
          this.listeProduitQuantite.push({produit: prod, quantite: lp.quantite})
          this.estTrouve = true;
        }
      });
      if(!this.estTrouve)
        this.listeProduitQuantite.push({produit: prod, quantite: 0})
    });
    return this.listeProduitQuantite;
  }
  
}