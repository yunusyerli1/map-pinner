import { Injectable } from '@angular/core';
import * as mapboxgl from 'mapbox-gl';
import { environment } from "../../environments/environment";
import { GeoJson } from '../models/map';

//declare const mapboxgl: any;

@Injectable({
  providedIn: 'root'
})
export class MapService {

  map: mapboxgl.Map;
  style = 'mapbox://styles/mapbox/streets-v11';
  lat = 45.899977;
  lng = 6.172652;
  zoom = 12;

  source:any;
  markers:any;

  constructor() {
    mapboxgl.accessToken = environment.mapbox.accessToken;
  }

  createMap() {
    this.map = new mapboxgl.Map({
      container: 'map',
      center: [this.lng, this.lat],
      zoom: this.zoom,
      style: this.style,
    })
   this.map.addControl(new mapboxgl.NavigationControl());
  }

  getMarkers() {
    const geoJson = [{
      'type': 'Feature',
      'geometry': {
        'type': 'Point',
        'coordinates': ['80.20929129999999', '13.0569951']
      },
      'properties': {
        'message': 'Chennai'
      }
    }, {
      'type': 'Feature',
      'geometry': {
        'type': 'Point',
        'coordinates': ['77.350048', '12.953847' ]
      },
      'properties': {
        'message': 'bangulare'
      }
    }];
    return geoJson;
  }


}

