import { Adresse } from './Adresse';

export interface Utilisateur {
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
}