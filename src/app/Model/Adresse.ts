import { Commande } from './Commande';
import { Utilisateur } from './Utilisateur';

export class Adresse {
    id: Number;
    rue: String;
    numero: Number;
    localite: String;
    codePostal: Number;
    pays: String;
    commande: Commande[];
    utilisateur: Utilisateur[];
}