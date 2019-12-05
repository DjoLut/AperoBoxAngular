/* tslint:disable */
import { NgModule, ModuleWithProviders } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ApiConfiguration, ApiConfigurationInterface } from './api-configuration';

import { AdresseService } from './services/adresse.service';
import { BoxService } from './services/box.service';
import { CommandeService } from './services/commande.service';
import { CommentaireService } from './services/commentaire.service';
import { LigneCommandeService } from './services/ligne-commande.service';
import { LigneProduitService } from './services/ligne-produit.service';
import { ProduitService } from './services/produit.service';
import { UtilisateurService } from './services/utilisateur.service';

/**
 * Provider for all Api services, plus ApiConfiguration
 */
@NgModule({
  imports: [
    HttpClientModule
  ],
  exports: [
    HttpClientModule
  ],
  declarations: [],
  providers: [
    ApiConfiguration,
    AdresseService,
    BoxService,
    CommandeService,
    CommentaireService,
    LigneCommandeService,
    LigneProduitService,
    ProduitService,
    UtilisateurService
  ],
})
export class ApiModule {
  static forRoot(customParams: ApiConfigurationInterface): ModuleWithProviders {
    return {
      ngModule: ApiModule,
      providers: [
        {
          provide: ApiConfiguration,
          useValue: {rootUrl: customParams.rootUrl}
        }
      ]
    }
  }
}
