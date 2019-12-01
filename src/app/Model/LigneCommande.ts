import { Commande } from './Commande';
import { Box } from './Box';
import { Produit } from './Produit';

export class LigneCommande {
    id: number;
    quantite: number;
    commande: Commande;
    box: Box;
    produit: Produit;
}