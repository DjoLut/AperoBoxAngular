import { Commentaire } from './Commentaire';
import { LigneCommande } from './LigneCommande';
import { LigneProduit } from './LigneProduit';

export class Box {
    id: number;
    nom: string;
    prixUnitaireHTVA: number;
    tva: number;
    promotion: number;
    description: string;
    photo: string;
    affichable: boolean;
    dateCreation: Date;
    commentaire: Commentaire[];
    ligneCommande: LigneCommande[];
    ligneProduit: LigneProduit[];
}