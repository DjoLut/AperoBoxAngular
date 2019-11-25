import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UtilisateursComponent } from './Component/UtilisateursComponents/utilisateurs/utilisateurs.component';
import { AccueilComponent } from './Component/AccueilComponents/accueil/accueil.component';
import { CommentaireComponent } from './Component/CommentaireComponents/commentaire/commentaire.component';
import { MiseAJourComponent } from './Component/MiseAJourComponents/mise-a-jour/mise-a-jour.component';
import { PageNonTrouveComponent } from './Component/page-non-trouve/page-non-trouve.component';


const routes: Routes = [
  {path: '', redirectTo: 'accueil', pathMatch: 'full'},
  {path: 'accueil', component: AccueilComponent},
  {path: 'utilisateur', component: UtilisateursComponent},
  {path: 'commentaire', component: CommentaireComponent},
  {path: 'update', component: MiseAJourComponent},
  {path: '**', component: PageNonTrouveComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
