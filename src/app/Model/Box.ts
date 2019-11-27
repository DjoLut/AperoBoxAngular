export interface Box {
    id: Number;
    nom: String;
    prixUnitaireHTVA: Number;
    tva: Number;
    promotion: Number;
    description: String;
    photo: String;
    affichable: Boolean;
    dateCreation: Date;
}