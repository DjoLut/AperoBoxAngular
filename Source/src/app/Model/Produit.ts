import { LigneCommande } from './LigneCommande';
import { LigneProduit } from './LigneProduit';

export class Produit {
    id: number;
    prixUnitaireHtva: number;
    tva: number;
    nom: string;
    datePeremption: Date;
    alcool: boolean;
    rowVersion: number;
    ligneCommande: LigneCommande[];
    ligneProduit: LigneProduit[];
}