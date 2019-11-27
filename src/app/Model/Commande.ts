import { Utilisateur } from './Utilisateur';
import { Adresse } from './Adresse';

export interface Commande {
    id: Number;
    dateCreation: Date;
    promotion: Number;
    Utilisateur: Utilisateur;
    Adresse: Adresse;
}