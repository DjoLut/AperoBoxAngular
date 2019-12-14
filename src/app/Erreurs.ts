
export class Erreurs
{
    constructor() { }

    static gestionErreur(status: number) {
        switch(status) {
            case 400 : 
                alert("Erreur de contenu ! ");
                break;
            case 401 : 
                alert("Accès non autorisée ! Session expirée ! ");
                break;
            case 403 : 
                alert("Vous n'avez pas les droits suffisants ! ");
                break;
            case 409 : 
                alert("Conflit. Accès concurrents ! ");
                break;
            case 500 : 
                alert("Erreur connexion avec l'api ! ");
            default : 
                alert("Erreur inattendue ");
        }
    }
}