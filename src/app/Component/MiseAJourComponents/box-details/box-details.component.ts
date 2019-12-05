import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { Box } from 'src/app/Model/Box';
import { BoxService } from 'src/app/Service/box.service';

@Component({
  selector: 'app-box-details',
  templateUrl: './box-details.component.html',
  styleUrls: ['./box-details.component.css']
})
export class BoxDetailsComponent implements OnInit {

  @Input() box: Box;

  constructor(private boxService: BoxService) { }

  ngOnInit() {
    this.box = new Box();
  }

  suppressionBox(box: Box) {
    this.boxService.supprimerBox(box).subscribe(elem => {
      window.location.reload();
    }); //ERROR ETC ..... à faire plus tard
  }

}
