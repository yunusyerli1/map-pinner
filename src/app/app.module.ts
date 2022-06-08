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
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
