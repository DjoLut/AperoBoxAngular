import { Commande } from './Commande';
import { Utilisateur } from './Utilisateur';

export class Adresse {
    id: number;
    rue: string;
    numero: number;
    localite: string;
    codePostal: number;
    pays: string;
    rowVersion: number;
    commande: Commande[];
    utilisateur: Utilisateur[];
}