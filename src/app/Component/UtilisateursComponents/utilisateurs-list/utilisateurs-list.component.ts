import { Component, OnInit } from '@angular/core';
import { UtilisateurService } from 'src/app/Service/utilisateur.service';
import { Utilisateur } from 'src/app/Model/Utilisateur';

@Component({
  selector: 'app-utilisateurs-list',
  templateUrl: './utilisateurs-list.component.html',
  styleUrls: ['./utilisateurs-list.component.css']
})
export class UtilisateursListComponent implements OnInit {

  utilisateurs: Utilisateur[];

  constructor(private utilisateurService: UtilisateurService) { }

  ngOnInit() {
    this.utilisateurs = new Array();
    this.utilisateurService.getAllUtilisateur().subscribe((data) => {
      this.utilisateurs = data;
    });
  }

}
