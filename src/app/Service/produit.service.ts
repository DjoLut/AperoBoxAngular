import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Produit } from '../Model/Produit';
import { Constantes } from '../Constantes';

@Injectable({
  providedIn: 'root'
})
export class ProduitService {

  constructor(private http:HttpClient) { }

  getAllProduit(): Observable<Produit[]> {
    return this.http.get<Produit[]>(`${Constantes.URL_API}Produit`);
  }
}
