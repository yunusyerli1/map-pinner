import { Component, OnInit, Renderer2 } from '@angular/core';
import * as mapboxgl from 'mapbox-gl';
import { FeatureCollection, GeoJson } from '../../models/map';
import { MapboxService } from 'src/app/services/mapbox.service';
import { DataService } from 'src/app/services/data.service';


@Component({
  selector: 'app-map-container',
  templateUrl: './map-container.component.html',
  styleUrls: ['./map-container.component.scss']
})



export class MapContainerComponent implements OnInit {

  DATA:any;
  ZOOM:number= 16;

  geojson = {
    type: 'FeatureCollection',
    features: [
      {
        type: 'Feature',
        geometry: {
          type: 'Point',
          coordinates: [-93.2056, 33.4056]
        },
        properties: {
          title: 'Mapbox',
          description: 'Washington, D.C.'
        }
      },
      {
        type: 'Feature',
        geometry: {
          type: 'Point',
          coordinates: [39.4056, 35.2056]
        },
        properties: {
          title: 'Mapbox',
          description: 'San Francisco, California'
        }
      }
    ]
  };

  constructor(
    private dataService: DataService,
    private mapboxService: MapboxService,
    private renderer : Renderer2) {
  }

   async ngOnInit(): Promise<void> {
    this.DATA = await this.dataService.getList();
    this.mapboxService.initMap();
    this.addMarkers();
  }

  addMarkers() {
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
               `<div style="padding:0.1rem 0.5rem;">
               <h5>${feature?.name}</h5>
               <img src="${feature?.photo}" width="200px"><br>
               <span>${feature?.city}, ${feature?.state}</span>
               <p>${feature?.streetAddress}</p>
               </div>`
             )).addTo(this.mapboxService.map);
             this.mapboxService.map.flyTo({center: arr, zoom: this.ZOOM});
       });
   }
 }



}

