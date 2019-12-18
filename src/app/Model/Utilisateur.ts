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
    adresse: number;
    rowVersion: number;
    commande: Commande[];
    commentaire: Commentaire[];
    utilisateurRole: UtilisateurRole[];
}

export class UtilisateurRole {
    idRole: string;
    idUtilisateur: number;
    role: Role;
}

export class Role {
    nom: string;
}