import { Box } from './Box';
import { Produit } from './Produit';

export class LigneProduit {
    id: number;
    quantite: number;
    box: Box;
    produit: Produit;
}