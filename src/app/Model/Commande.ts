import { Utilisateur } from './Utilisateur';
import { Adresse } from './Adresse';
import { LigneCommande } from './LigneCommande';

export class Commande {
    id: number;
    dateCreation: Date;
    promotion: number;
    utilisateur: Utilisateur;
    adresse: Adresse;
    ligneCommande: LigneCommande[];
}