import { Component, OnInit, Input } from '@angular/core';
import { Box } from 'src/app/Model/Box';
import { Commentaire } from 'src/app/Model/Commentaire';
import { CommentaireService } from 'src/app/Service/commentaire.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-commentaire-list',
  templateUrl: './commentaire-list.component.html',
  styleUrls: ['./commentaire-list.component.css']
})
export class CommentaireListComponent implements OnInit {

  @Input() box: Box;
  selectedIndex: number = null;
  selectedCommentaire: Commentaire;

  constructor(
    private commentaireService: CommentaireService,
    private router: Router
  ) { }

  ngOnInit() {
    this.box = new Box();
  }

  selectCommentaire(commentaire: Commentaire, index: number) {
    this.selectedCommentaire = commentaire;
    this.selectedIndex = index;
  }

  suppressionCommentaire(commentaire: Commentaire) {
    if(confirm("Voulez-vous supprimer ce commentaire ? ")) {
      this.commentaireService.supprimerCommentaire(commentaire).subscribe(elem => {
        this.reloadPage();
      }); //ERROR ETC ..... à faire plus tard
    }
  }

  reloadPage() {
    this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
      this.router.navigate(['/commentaire']);
    });
  }

}
