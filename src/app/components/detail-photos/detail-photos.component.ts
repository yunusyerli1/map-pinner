import { Component, Input, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-detail-photos',
  templateUrl: './detail-photos.component.html',
  styleUrls: ['./detail-photos.component.scss']
})
export class DetailPhotosComponent implements OnInit {

 @Input() images;
  constructor() { }

  ngOnInit(): void {
  }


}
