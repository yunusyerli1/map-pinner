import { Component, OnInit, Renderer2 } from '@angular/core';
import { environment } from '../../../environments/environment';
import { MapService } from '../../services/map.service';
import * as mapboxgl from 'mapbox-gl';
import { FeatureCollection, GeoJson } from '../../models/map';


@Component({
  selector: 'app-map-container',
  templateUrl: './map-container.component.html',
  styleUrls: ['./map-container.component.scss']
})



export class MapContainerComponent implements OnInit {

  map: mapboxgl.Map;
  style = 'mapbox://styles/mapbox/streets-v11';
  lat = 33.9635;
  lng = 39.159;
  zoom = 4;

  source:any;
  markers:any;

  DATA:any;
  MAP_DETAIL:any;

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

    this.addControls();
    this.addMarkers();
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

  addMarkers() {
     // add markers to map
    for (const feature of this.DATA.records) {
      // create a HTML element for each feature
      let el = this.renderer.createElement('div');
      this.renderer.addClass(el, 'marker' );
      console.log(feature)
      // make a marker for each feature and add to the map
      let arr= [feature.geocode.Longitude, feature.geocode.Latitude];
      let pinnedMap = new mapboxgl.Marker(el).setLngLat(arr).addTo(this.map);
      this.renderer.listen(el, 'click', (evt) => {
        pinnedMap.setPopup(
            new mapboxgl.Popup({ offset: 25 }) // add popups
              .setHTML(
                `<div style="padding:0.1rem 0.5rem;">
                <h5>${feature.name}</h5>
                <img src="${feature.photo}" width="200px"><br>
                <span>${feature.city}, ${feature.state}</span>
                <p>${feature.streetAddress}</p>
                </div>`
              )).addTo(this.map);
              this.map.flyTo({center: [feature.geocode.Longitude, feature.geocode.Latitude], zoom: 16});
              console.log(evt)
        });
    }
  }

}

