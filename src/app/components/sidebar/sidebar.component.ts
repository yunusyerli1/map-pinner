import { Component, OnInit } from '@angular/core';
import { MapService } from 'src/app/services/map.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  DATA:any;
  hasDetailClicked:boolean = false;

  constructor(private mapService: MapService) { }

  ngOnInit(): void {
    this.getData();
  }

  public async getData() {
    this.DATA = await this.mapService.getList();
  }

  changeDetail() {
    this.hasDetailClicked = true;
  }

}
