import { Component, ElementRef, Inject, OnInit, PLATFORM_ID, Renderer2 } from '@angular/core';
import { environment } from '../../environments/environment';
import { MapService } from '../services/map.service';
import * as mapboxgl from 'mapbox-gl';
import { FeatureCollection, GeoJson } from '../models/map';
import { isPlatformBrowser } from '@angular/common';


//declare const mapboxgl: any;

@Component({
  selector: 'app-map-container',
  templateUrl: './map-container.component.html',
  styleUrls: ['./map-container.component.scss']
})



export class MapContainerComponent implements OnInit {

  @Inject(PLATFORM_ID) private platformId: Object

  map: mapboxgl.Map;
  style = 'mapbox://styles/mapbox/streets-v11';
  lat = 33.9635;
  lng = 39.159;
  zoom = 4;

  source:any;
  markers:any;

  DATA:any;
  MAP_DETAIL:any;


  // for (const feature of this.geojson.features) {
  //   // create a HTML element for each feature
  //   const el = this.renderer.createElement('div');
  //   this.renderer.addClass(el, 'marker');

  //   // make a marker for each feature and add to the map
  //   new mapboxgl.Marker(el).setLngLat(feature.geometry.coordinates).addTo(this.map);
  // }

  // for (const feature of this.DATA?.records) {
  //   // create a HTML element for each feature
  //   const el = this.renderer.createElement('div');
  //   this.renderer.addClass(el, 'marker');

  //   // make a marker for each feature and add to the map
  //   new mapboxgl.Marker(el).setLngLat([feature.geocode.Latitude, feature.geocode.Longitude]).addTo(this.map);
  // }

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

  constructor(public mapService: MapService,
    private renderer:Renderer2) {
    mapboxgl.accessToken = environment.mapbox.accessToken;
  }

  async ngOnInit(): Promise<void> {
    await this.getData();
    this.initMap();
  }

  async getData() {
    this.MAP_DETAIL = await this.mapService.getMapInfo();
    this.DATA = await this.mapService.getList();
    console.log(this.DATA);
    console.log(this.MAP_DETAIL);
  }

  initMap() {
    this.map = new mapboxgl.Map({
      container: 'map',
      center: this.MAP_DETAIL?.center,
      zoom: this.MAP_DETAIL?.zoom,
      style: this.style,
    })

    //Adding map controls
   this.map.addControl(new mapboxgl.NavigationControl());

   //Add marker on click
  //  this.map.on('click', (event) => {
  //    const coordinates = [event.lngLat.lng, event.lngLat.lat];
  //    const newMarker = new GeoJson(coordinates);
  //    this.creteMarker(newMarker);
  //    console.log(coordinates)
  //  });

    // add markers to map
    for (const feature of this.DATA.records) {
     // create a HTML element for each feature
     let el = this.renderer.createElement('div');
     this.renderer.addClass(el, 'marker' );


     console.log(feature)

     // make a marker for each feature and add to the map
     let arr= [feature.geocode.Longitude, feature.geocode.Latitude]
     new mapboxgl.Marker(el).setLngLat(arr).setPopup(
      new mapboxgl.Popup({ offset: 25 }) // add popups
        .setHTML(
          `<div style="padding:0.1rem 0.5rem;">
          <h5>${feature.name}</h5>
          <img src="${feature.photo}" width="180px"><br>
          <span>${feature.city}, ${feature.state}</span>
          <p>${feature.streetAddress}</p>
          </div>`
        )).addTo(this.map);




   }




  }



  getMarkers() {
    const geoJson = [{
      'type': 'Feature',
      'geometry': {
        'type': 'Point',
        'coordinates': ['33.983', '39.2951']
      },
      'properties': {
        'message': 'Chennai'
      }
    }, {
      'type': 'Feature',
      'geometry': {
        'type': 'Point',
        'coordinates': ['29.7458', '39.814401' ]
      },
      'properties': {
        'message': 'bangulare'
      }
    }];
    return geoJson;
  }

  creteMarker(marker: GeoJson) {
    console.log(marker)
    const mark = new mapboxgl.Marker({
      draggable: true
    }).setLngLat([marker.geometry.coordinates[0], marker.geometry.coordinates[1]]).addTo(this.map);
  }



}
