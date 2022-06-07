import { Component, OnInit } from '@angular/core';
import { MapService } from '../services/map.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

isLoading:boolean = false;

  constructor(private mapService: MapService) {

    //this.isLoading = this.mapService.isDataLoading;
  }

  ngOnInit(): void {

    this.mapService.getValue().subscribe((value) => {
      this.isLoading = value;
    });

  }

}
