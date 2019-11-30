import { Utilisateur } from './Utilisateur';
import { Adresse } from './Adresse';
import { LigneCommande } from './LigneCommande';

export class Commande {
    id: Number;
    dateCreation: Date;
    promotion: Number;
    utilisateur: Utilisateur;
    adresse: Adresse;
    ligneCommande: LigneCommande[];
}