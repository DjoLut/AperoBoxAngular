import { Commande } from './Commande';
import { Utilisateur } from './Utilisateur';

export class Adresse {
    id: number;
    rue: string;
    numero: number;
    localite: string;
    codePostal: number;
    pays: string;
    commande: Commande[];
    utilisateur: Utilisateur[];
}