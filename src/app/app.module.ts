import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MiseAJourComponent } from './mise-a-jour/mise-a-jour.component';
import { AccueilComponent } from './accueil/accueil.component';
import { UtilisateursComponent } from './utilisateurs/utilisateurs.component';
import { CommentaireComponent } from './commentaire/commentaire.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MiseAJourComponent,
    AccueilComponent,
    UtilisateursComponent,
    CommentaireComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
