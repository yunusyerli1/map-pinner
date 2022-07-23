import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { MapContainerComponent } from './components/map-container/map-container.component';

import { HomeComponent } from './home/home.component';
import { NotFoundPageComponent } from './components/not-found-page/not-found-page.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { CardItemComponent } from './components/sidebar/card-item/card-item.component';
import { LoadingComponent } from './components/loading/loading.component';
import { SidebarDetailComponent } from './components/sidebar-detail/sidebar-detail.component';
import { DetailPhotosComponent } from './components/detail-photos/detail-photos.component';
import { ImageSliderComponent } from './components/image-slider/image-slider.component';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { hotelReducer } from './store/hotel.reducers';
import { EffectsModule } from '@ngrx/effects';
import { HotelsEffects } from './store/hotel.effects';

@NgModule({
  declarations: [
    AppComponent,
    MapContainerComponent,
    HomeComponent,
    NotFoundPageComponent,
    SidebarComponent,
    CardItemComponent,
    LoadingComponent,
    SidebarDetailComponent,
    DetailPhotosComponent,
    ImageSliderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    StoreModule.forRoot({"hotels": hotelReducer}),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production }),
    EffectsModule.forRoot([HotelsEffects]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
