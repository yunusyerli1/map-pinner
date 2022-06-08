import { Injectable, Renderer2, RendererFactory2 } from '@angular/core';
import { environment } from '../../environments/environment';
import * as mapboxgl from 'mapbox-gl';

@Injectable({
  providedIn: 'root'
})
export class MapboxService {


  map: mapboxgl.Map;
  style = environment.style_path;
  lat = 32.71511592010708;
  lng = -97.40416574486872;
  zoom = 12;

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

  constructor() {
    mapboxgl.accessToken = environment.mapbox.accessToken;
  }



  initMap() {
    this.map = new mapboxgl.Map({
      container: 'map',
      center: [this.lng, this.lat],
      zoom: this.zoom,
      style: this.style,
    })

    this.addControls();
    //this.addMarkers();
    this.addLayers();
  }

  addLayers() {
    // this.map.addLayer({

    // });
  }

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
      // const newButton = this.renderer.createElement('button');
        // const buttonText =this.renderer.createText('Değiştir');
        // this.renderer.appendChild(newButton, buttonText);
        // this.map.addControl(newButton, 'top-right');

        // this.map.fitBounds([
        //   [-77.03238901390978, 38.913188059745586],
        //   [-78.03238901390978, 39.913188059745586]
        // ]);
  }


}
