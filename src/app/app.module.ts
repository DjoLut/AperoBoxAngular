import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from './header/header.component';
import { MiseAJourComponent } from './mise-a-jour/mise-a-jour.component';
import { AccueilComponent } from './accueil/accueil.component';
import { UtilisateursComponent } from './utilisateurs/utilisateurs.component';
import { CommentaireComponent } from './commentaire/commentaire.component';
import { CommonModule } from '@angular/common';
import { UtilisateursListComponent } from './Component/utilisateurs-list/utilisateurs-list.component';
import { UtilisateursDetailsComponent } from './Component/utilisateurs-details/utilisateurs-details.component';
import { CommentaireListComponent } from './Component/commentaire-list/commentaire-list.component';
import { BoxListComponent } from './Component/box-list/box-list.component';
import { BoxDetailsComponent } from './Component/box-details/box-details.component';
import { ProduitListComponent } from './Component/produit-list/produit-list.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MiseAJourComponent,
    AccueilComponent,
    UtilisateursComponent,
    CommentaireComponent,
    UtilisateursListComponent,
    UtilisateursDetailsComponent,
    CommentaireListComponent,
    BoxListComponent,
    BoxDetailsComponent,
    ProduitListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    CommonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
