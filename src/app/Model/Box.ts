import { Commentaire } from './Commentaire';
import { LigneCommande } from './LigneCommande';
import { LigneProduit } from './LigneProduit';

export class Box {
    id: Number;
    nom: String;
    prixUnitaireHTVA: Number;
    tva: Number;
    promotion: Number;
    description: String;
    photo: String;
    affichable: Boolean;
    dateCreation: Date;
    commentaire: Commentaire[];
    ligneCommande: LigneCommande[];
    ligneProduit: LigneProduit[];
}