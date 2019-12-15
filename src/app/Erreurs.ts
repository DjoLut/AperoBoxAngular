import { Constantes } from './Constantes';

export class Erreurs
{
    constructor() { }

    static gestionErreur(status: number) {
        switch(status) {
            case 400 : 
                alert(Constantes.ERREUR400);
                break;
            case 401 : 
                alert(Constantes.ERREUR401);
                break;
            case 403 : 
                alert(Constantes.ERREUR403);
                break;
            case 409 : 
                alert(Constantes.ERREUR409);
                break;
            case 500 : 
                alert(Constantes.ERREUR500);
            default : 
                alert(Constantes.ERREURDEFAULT);
        }
    }
}