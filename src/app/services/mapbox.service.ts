import { Injectable, Renderer2, RendererFactory2 } from '@angular/core';
import { environment } from '../../environments/environment';
import * as mapboxgl from 'mapbox-gl';
import { GeoJson } from '../models/map';
import { DataService } from './data.service';

@Injectable({
  providedIn: 'root'
})
export class MapboxService {

  DATA:any;
  features:any = [];
  map: mapboxgl.Map;
  style = environment.style_path;
  lat:number;
  lng:number;
  zoom = 12;

  constructor(private dataService: DataService) {
    mapboxgl.accessToken = environment.mapbox.accessToken;

  }

  async getData() {
   let result =  await this.dataService.getList();
   this.lat = result.records[0].geocode.Latitude;
   this.lng = result.records[0].geocode.Longitude;
   return result;
  }

  setGeoJSON() {
    this.DATA.records.forEach(el => {
      const feature = {"type": "FeatureCollection","properties": {},"geometry": {"type": "Point","coordinates": [el.geocode.Longitude, el.geocode.Latitude]}};
      this.features.push(feature);
    })
    console.log(this.features);
}



  initMap() {
    this.map = new mapboxgl.Map({
      container: 'map',
      center: [this.lng, this.lat],
      zoom: this.zoom,
      style: this.style,
    })

    this.map.on('load', () => {
      //this.addSource();
      this.addLayers();
    });
    this.addControls();
    //this.addMarkers();


  }

  // addSource() {
  //   this.map.addSource('earthquakes', {
  //     type: 'geojson',
  //     // Use a URL for the value for the `data` property.
  //     data: 'https://docs.mapbox.com/mapbox-gl-js/assets/earthquakes.geojson'
  //     });
  // }

  addControls() {
    //Adding map controls
    this.map.addControl(new mapboxgl.NavigationControl({showZoom: true, showCompass: true, visualizePitch: true}));
    this.map.addControl(new mapboxgl.FullscreenControl());
    this.map.addControl(new mapboxgl.GeolocateControl({
      positionOptions: {
      enableHighAccuracy: true
      },
      trackUserLocation: true,
      showUserHeading: true
      }));
  }

  //  flyTo(data: GeoJson) {
  //    this.map.flyTo({
  //      center: data.geometry.coordinates
  //    })
  //  }

  addLayers() {
    // this.map.addLayer({
    //   id: 'customMarketid',
    //   source: 'customMarker',
    //   type: 'symbol',
    //   layout: {
    //     'text-field': '{message}',
    //     'text-size': 24,
    //     'text-transform': 'uppercase',
    //     'icon-image': 'marker-15',
    //     'text-offset': [0, 1.5]
    //   },
    //   paint: {
    //     'text-color': '#f16624',
    //     'text-halo-color': '#fff',
    //     'text-halo-width': 2
    //   }
    // });

    //   // Add a black outline around the polygon.
    //   this.map.addLayer({
    //   'id': 'outline',
    //   'type': 'line',
    //   'source': 'maine',
    //   'layout': {},
    //   'paint': {
    //   'line-color': '#000',
    //   'line-width': 3
    //   }
    //   });

    // this.map.addLayer({
    //   'id': 'earthquakes-layer',
    //   'type': 'circle',
    //   'source': 'earthquakes',
    //   'paint': {
    //   'circle-radius': 8,
    //   'circle-stroke-width': 2,
    //   'circle-color': 'red',
    //   'circle-stroke-color': 'white'
    //   }
    //   });
  }


}
