import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  DATA:any;

  constructor(private dataService: DataService,) { }

  ngOnInit(): void {
    this.DATA = this.dataService.LIST;
  }

  goDetail(property_id:number) {
    console.log(property_id)
  }

}
