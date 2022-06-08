import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  DATA:any;
  isLoading:boolean = false;

  constructor(private dataService: DataService,private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    //this.DATA = this.dataService.LIST;
    this.getData();
  }

  async getData() {
    this.isLoading = true;
    this.DATA =  await this.dataService.getList();
    this.isLoading = false;
  }



}
