import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Provider, forwardRef } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { HeaderComponent } from './Component/header/header.component';
import { AccueilComponent } from './Component/AccueilComponents/accueil/accueil.component';
import { CommonModule } from '@angular/common';
import { UtilisateursListComponent } from './Component/UtilisateursComponents/utilisateurs-list/utilisateurs-list.component';
import { UtilisateursDetailsComponent } from './Component/UtilisateursComponents/utilisateurs-details/utilisateurs-details.component';
import { CommentaireListComponent } from './Component/CommentaireComponents/commentaire-list/commentaire-list.component';
import { BoxListComponent } from './Component/MiseAJourComponents/box-list/box-list.component';
import { BoxDetailsComponent } from './Component/MiseAJourComponents/box-details/box-details.component';
import { ProduitListComponent } from './Component/MiseAJourComponents/produit-list/produit-list.component';
import { PageNonTrouveComponent } from './Component/page-non-trouve/page-non-trouve.component';
import { apiInterceptor } from './apiInterceptor';
import { ApiModule } from './api/api.module';

export const API_INTERCEPTOR_PROVIDER: Provider = {
  provide: HTTP_INTERCEPTORS,
  useExisting: forwardRef(() => apiInterceptor),
  multi: true
};

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AccueilComponent,
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
    CommonModule,
    ApiModule.forRoot({rootUrl: "http://localhost:4200"})
  ],
  providers: [apiInterceptor, 
    API_INTERCEPTOR_PROVIDER],
  bootstrap: [AppComponent]
})
export class AppModule { }
