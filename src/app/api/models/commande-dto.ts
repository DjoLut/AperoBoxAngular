/* tslint:disable */
import { LigneCommandeDTO } from './ligne-commande-dto';
export interface CommandeDTO {
  id?: number;
  dateCreation: string;
  utilisateur?: number;
  promotion?: number;
  adresse?: number;
  ligneCommande?: Array<LigneCommandeDTO>;
}
