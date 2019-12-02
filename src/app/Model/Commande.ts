import { LigneCommande } from './LigneCommande';

export class Commande {
    id: number;
    dateCreation: Date;
    promotion: number;
    utilisateur: number;
    adresse: number;
    ligneCommande: LigneCommande[];
}