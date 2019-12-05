/* tslint:disable */
import { CommentaireDTO } from './commentaire-dto';
import { LigneCommandeDTO } from './ligne-commande-dto';
import { LigneProduitDTO } from './ligne-produit-dto';
export interface BoxDTO {
  photo?: string;
  id?: number;
  prixUnitaireHtva: number;
  tva: number;
  promotion?: number;
  description: string;
  nom: string;
  affichable?: number;
  dateCreation: string;
  commentaire?: Array<CommentaireDTO>;
  ligneCommande?: Array<LigneCommandeDTO>;
  ligneProduit?: Array<LigneProduitDTO>;
}
