/* tslint:disable */
import { CommandeDTO } from './commande-dto';
import { CommentaireDTO } from './commentaire-dto';
export interface UtilisateurDTO {
  gsm: number;
  id?: number;
  prenom: string;
  dateNaissance: string;
  mail: string;
  telephone?: number;
  nom: string;
  username: string;
  authorities?: string;
  motDePasse: string;
  adresse?: number;
  commande?: Array<CommandeDTO>;
  commentaire?: Array<CommentaireDTO>;
}
