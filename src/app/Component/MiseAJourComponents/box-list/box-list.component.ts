import { Component, OnInit } from '@angular/core';
import { BoxService } from 'src/app/Service/box.service';
import { Box } from 'src/app/Model/Box';

@Component({
  selector: 'app-box-list',
  templateUrl: './box-list.component.html',
  styleUrls: ['./box-list.component.css']
})
export class BoxListComponent implements OnInit {


  boxs: Array<Box>;
  selectedBox: Box;

  constructor(private boxService: BoxService) { }

  ngOnInit() {
    this.boxs = new Array<Box>();
    this.boxService.getAllBox().subscribe((data) => {
      this.boxs = data;
    });
  }

  selectBox(box: Box){
    this.selectedBox = box;
  }

  ajouterBox(){
    
  }

}
