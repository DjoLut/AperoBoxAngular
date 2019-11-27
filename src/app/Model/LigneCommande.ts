import { Commande } from './Commande';
import { Box } from './Box';
import { Produit } from './Produit';

export interface LigneCommande {
    id: Number;
    quantite: Number;
    commande: Commande;
    box: Box;
    produit: Produit;
}