import { Component, OnInit } from '@angular/core';
import { MapService } from 'src/app/services/map.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  DATA:any;

  constructor(private mapService: MapService) { }

  ngOnInit(): void {
    this.DATA = this.mapService.LIST;
  }

  goDetail(property_id:number) {
    console.log(property_id)
  }

}
