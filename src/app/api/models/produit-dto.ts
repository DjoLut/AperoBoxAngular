/* tslint:disable */
import { LigneCommandeDTO } from './ligne-commande-dto';
import { LigneProduitDTO } from './ligne-produit-dto';
export interface ProduitDTO {
  id?: number;
  prixUnitaireHtva: number;
  tva: number;
  nom: string;
  datePeremption: string;
  alcool: number;
  ligneCommande?: Array<LigneCommandeDTO>;
  ligneProduit?: Array<LigneProduitDTO>;
}
