import { Utilisateur } from './Utilisateur';
import { Box } from './Box';

export interface Commentaire {
    id: Number;
    texte: String;
    dateCreation: Date;
    utilisateur: Utilisateur;
    box: Box;
}