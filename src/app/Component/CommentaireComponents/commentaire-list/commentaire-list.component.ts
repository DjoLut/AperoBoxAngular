import { Component, OnInit, Input } from '@angular/core';
import { Box } from 'src/app/Model/Box';
import { Observable } from 'rxjs';
import { Commentaire } from 'src/app/Model/Commentaire';
import { CommentaireService } from 'src/app/Service/commentaire.service';
import { utils } from 'protractor';

@Component({
  selector: 'app-commentaire-list',
  templateUrl: './commentaire-list.component.html',
  styleUrls: ['./commentaire-list.component.css']
})
export class CommentaireListComponent implements OnInit {

  @Input() box: Box;
  selectedCommentaire: Commentaire;

  constructor(private commentaireService: CommentaireService) { }

  ngOnInit() {
  }

  selectCommentaire(commentaire: Commentaire) {
    this.selectedCommentaire = commentaire;
  }

  suppressionCommentaire(commentaire: Commentaire) {
    this.commentaireService.supprimerCommentaire(commentaire).subscribe(elem => {
      window.location.reload();
    }); //ERROR ETC ..... à faire plus tard
  }

}
