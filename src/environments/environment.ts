// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  mapbox:{
    accessToken: 'pk.eyJ1IjoieXVudXN5ZXJsaTEiLCJhIjoiY2toYWQ2bDduMGFybjJ0cnN1aW5mbXZvOCJ9.cOo-CPzzjyKcYy-ZJPmYpA'
  },
  mapTiler:'SoL71Zyf7SmLrVYWC7fQ',
  path:'https://app.smartapartmentdata.com/List/json',
  style_path:'https://api.maptiler.com/maps/eef16200-c4cc-4285-9370-c71ca24bb42d/style.json?key=SoL71Zyf7SmLrVYWC7fQ'
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
