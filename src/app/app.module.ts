import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from './Component/header/header.component';
import { MiseAJourComponent } from './Component/MiseAJourComponents/mise-a-jour/mise-a-jour.component';
import { AccueilComponent } from './Component/AccueilComponents/accueil/accueil.component';
import { CommentaireComponent } from './Component/CommentaireComponents/commentaire/commentaire.component';
import { CommonModule } from '@angular/common';
import { UtilisateursListComponent } from './Component/UtilisateursComponents/utilisateurs-list/utilisateurs-list.component';
import { UtilisateursDetailsComponent } from './Component/UtilisateursComponents/utilisateurs-details/utilisateurs-details.component';
import { CommentaireListComponent } from './Component/CommentaireComponents/commentaire-list/commentaire-list.component';
import { BoxListComponent } from './Component/MiseAJourComponents/box-list/box-list.component';
import { BoxDetailsComponent } from './Component/MiseAJourComponents/box-details/box-details.component';
import { ProduitListComponent } from './Component/MiseAJourComponents/produit-list/produit-list.component';
import { PageNonTrouveComponent } from './Component/page-non-trouve/page-non-trouve.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MiseAJourComponent,
    AccueilComponent,
    CommentaireComponent,
    UtilisateursListComponent,
    UtilisateursDetailsComponent,
    CommentaireListComponent,
    BoxListComponent,
    BoxDetailsComponent,
    ProduitListComponent,
    PageNonTrouveComponent
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
