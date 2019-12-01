import { Adresse } from './Adresse';
import { Commande } from './Commande';
import { Commentaire } from './Commentaire';

export class Utilisateur {
    id: number;
    nom: string;
    prenom: string;
    dateNaissance: Date;
    mail: string;
    telephone: number;
    gsm: number;
    username: string;
    authorities: string;
    motDePasse: string;
    adresse: Adresse;
    commande: Commande[];
    commentaire: Commentaire[];
}