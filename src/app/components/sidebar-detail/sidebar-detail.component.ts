import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from 'src/app/services/data.service';
import { MapboxService } from 'src/app/services/mapbox.service';
import { ZoomTypes } from '../../constants/ZoomTypes'

@Component({
  selector: 'app-sidebar-detail',
  templateUrl: './sidebar-detail.component.html',
  styleUrls: ['./sidebar-detail.component.scss']
})
export class SidebarDetailComponent implements OnInit {

  DETAIL:any;
  property_id: number;
  isLoading:boolean = false;
  photos:any;

  constructor(private route: ActivatedRoute, private dataService:DataService, private mapboxService: MapboxService) {
    this.property_id= this.route.snapshot.params.id;
  }

  ngOnInit(): void {
    this.getData()
  }

  async getData() {
    this.isLoading = true;
    this.DETAIL = await this.dataService.getDetail(this.property_id);

    this.isLoading = false;
    console.log("DETAIL",this.DETAIL);
  }

  flyToDefault() {
    this.mapboxService.flyTo(ZoomTypes.DEFAULT_ZOOM);
  }
}
