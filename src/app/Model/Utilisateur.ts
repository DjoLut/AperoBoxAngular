import { Adresse } from './Adresse';
import { Commande } from './Commande';
import { Commentaire } from './Commentaire';

export class Utilisateur {
    id: Number;
    nom: String;
    prenom: String;
    dateNaissance: Date;
    mail: String;
    telephone: Number;
    gsm: Number;
    username: String;
    authorities: String;
    motDePasse: String;
    adresse: Adresse;
    commande: Commande[];
    commentaire: Commentaire[];
}