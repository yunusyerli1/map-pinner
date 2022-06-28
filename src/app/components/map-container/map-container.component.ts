import { Component, OnInit, Renderer2 } from '@angular/core';
import * as mapboxgl from 'mapbox-gl';
import { MapboxService } from 'src/app/services/mapbox.service';
import { DataService } from 'src/app/services/data.service';
import { ZoomTypes } from '../../constants/ZoomTypes';


@Component({
  selector: 'app-map-container',
  templateUrl: './map-container.component.html',
  styleUrls: ['./map-container.component.scss']
})



export class MapContainerComponent implements OnInit {

  DATA:any;
  features:any =[];
  ZOOM:number= 16;

  constructor(
    private dataService: DataService,
    private mapboxService: MapboxService,
    private renderer : Renderer2) {
  }

   async ngOnInit(): Promise<void> {
    this.DATA = await this.mapboxService.getData();
    console.log(this.DATA);
    this.mapboxService.initMap();

    this.setCenter();
    this.setMarkers();
  }



  setCenter() {

  }

  setMarkers() {
    // add markers to map
   for (const feature of this.DATA?.records) {
     // create a HTML element for each feature
     let el = this.renderer.createElement('div');
     this.renderer.addClass(el, 'marker' );
     // make a marker for each feature and add to the map
     let arr= [feature?.geocode?.Longitude, feature?.geocode?.Latitude];
     let pinnedMap = new mapboxgl.Marker(el).setLngLat(arr).addTo(this.mapboxService.map);
     this.renderer.listen(el, 'click', (evt) => {
       pinnedMap.setPopup(
           new mapboxgl.Popup({ offset: 25 }) // add popups
             .setHTML(
               `<a style="padding:0.1rem 0.5rem;">
               <h5>${feature?.name}</h5>
               <img src="${feature?.photo}" width="200px"><br>
               <span>${feature?.city}, ${feature?.state}</span>
               <p>${feature?.streetAddress}</p>
               </a>`
             )).addTo(this.mapboxService.map);
             this.mapboxService.map.flyTo({center: arr, zoom: ZoomTypes.POINT_ZOOM});
       });
   }
 }



}

