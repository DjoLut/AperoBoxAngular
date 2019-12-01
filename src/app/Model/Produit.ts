import { LigneCommande } from './LigneCommande';
import { LigneProduit } from './LigneProduit';

export class Produit {
    id: number;
    prixUnitaireHTVA: number;
    tva: number;
    nom: string;
    datePeremption: Date;
    alcool: boolean;
    ligneCommande: LigneCommande[];
    ligneProduit: LigneProduit[];
}