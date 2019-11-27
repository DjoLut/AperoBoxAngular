import { Box } from './Box';
import { Produit } from './Produit';

export interface LigneProduit {
    id: Number;
    quantite: Number;
    box: Box;
    produit: Produit;
}