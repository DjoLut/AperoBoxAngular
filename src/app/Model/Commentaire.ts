import { Utilisateur } from './Utilisateur';
import { Box } from './Box';

export class Commentaire {
    id: number;
    texte: string;
    dateCreation: Date;
    utilisateur: Utilisateur;
    box: Box;
}