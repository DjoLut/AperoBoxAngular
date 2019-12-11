import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AccueilComponent } from './Component/AccueilComponents/accueil/accueil.component';
import { PageNonTrouveComponent } from './Component/page-non-trouve/page-non-trouve.component';
import { UtilisateursListComponent } from './Component/UtilisateursComponents/utilisateurs-list/utilisateurs-list.component';
import { BoxListComponent } from './Component/MiseAJourComponents/box-list/box-list.component';
import { AuthenticationGuard } from './authentication.guard';


const routes: Routes = [
  {path: '', redirectTo: 'accueil', pathMatch: 'full'},
  {
    path: 'accueil', 
    component: AccueilComponent
  },
  {
    path: 'utilisateur', 
    component: UtilisateursListComponent,
    canActivate: [AuthenticationGuard]
  },
  {
    path: 'commentaire', 
    component: BoxListComponent,
    canActivate: [AuthenticationGuard]
  },
  {
    path: 'update', 
    component: BoxListComponent,
    canActivate: [AuthenticationGuard]
  },
  {path: '**', component: PageNonTrouveComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
