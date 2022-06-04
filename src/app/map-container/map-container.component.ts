import { Component, OnInit } from '@angular/core';
import { environment } from '../../environments/environment';
import { MapService } from '../services/map.service';

declare const mapboxgl: any;

@Component({
  selector: 'app-map-container',
  templateUrl: './map-container.component.html',
  styleUrls: ['./map-container.component.scss']
})



export class MapContainerComponent implements OnInit {

  constructor(private mapService: MapService) { }

  ngOnInit(): void {
    this.mapService.createMap();
  }



}
