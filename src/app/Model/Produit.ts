import { LigneCommande } from './LigneCommande';
import { LigneProduit } from './LigneProduit';

export class Produit {
    id: Number;
    prixUnitaireHTVA: Number;
    tva: Number;
    nom: String;
    datePeremption: Date;
    alcool: Boolean;
    ligneCommande: LigneCommande[];
    ligneProduit: LigneProduit[];
}