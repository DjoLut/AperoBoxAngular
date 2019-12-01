import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { Box } from 'src/app/Model/Box';

@Component({
  selector: 'app-box-details',
  templateUrl: './box-details.component.html',
  styleUrls: ['./box-details.component.css']
})
export class BoxDetailsComponent implements OnInit {

  @Input() box: Box;

  constructor() { }

  ngOnInit() {
  }  

}
