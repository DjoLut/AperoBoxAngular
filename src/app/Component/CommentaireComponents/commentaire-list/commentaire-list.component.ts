import { Component, OnInit, Input } from '@angular/core';
import { Box } from 'src/app/Model/Box';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-commentaire-list',
  templateUrl: './commentaire-list.component.html',
  styleUrls: ['./commentaire-list.component.css']
})
export class CommentaireListComponent implements OnInit {

  @Input() box: Box;

  constructor() { }

  ngOnInit() {
  }

}
