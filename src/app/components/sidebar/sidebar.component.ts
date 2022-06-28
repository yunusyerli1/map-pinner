import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { MapboxService } from 'src/app/services/mapbox.service';
import { ZoomTypes } from '../../constants/ZoomTypes'

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  DATA:any;
  isLoading:boolean = false;

  constructor(private dataService: DataService, private mapboxService: MapboxService) { }

  ngOnInit(): void {
    this.getData();
  }

  async getData() {
    this.isLoading = true;
    this.DATA =  await this.dataService.getList();
    this.isLoading = false;
  }

  flyToPoint(geocode) {
    let coords = [geocode.Longitude, geocode.Latitude]
    this.mapboxService.flyTo(ZoomTypes.POINT_ZOOM, coords);
  }



}
