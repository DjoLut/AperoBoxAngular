import { Commentaire } from './Commentaire';
import { LigneCommande } from './LigneCommande';
import { LigneProduit } from './LigneProduit';

export class Box {
    id: number;
    nom: string;
    prixUnitaireHtva: number;
    tva: number;
    promotion: number;
    description: string;
    photo: string;
    affichable: number;
    dateCreation: Date;
    commentaire: Commentaire[];
    ligneCommande: LigneCommande[];
    ligneProduit: LigneProduit[];
}