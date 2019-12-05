/* tslint:disable */
import { CommandeDTO } from './commande-dto';
import { UtilisateurDTO } from './utilisateur-dto';
export interface AdresseDTO {
  id?: number;
  rue: string;
  numero: string;
  localite: string;
  codePostal: number;
  pays: string;
  commande?: Array<CommandeDTO>;
  utilisateur?: Array<UtilisateurDTO>;
}
