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
