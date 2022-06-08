import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/internal/Subscription';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-sidebar-detail',
  templateUrl: './sidebar-detail.component.html',
  styleUrls: ['./sidebar-detail.component.scss']
})
export class SidebarDetailComponent implements OnInit {

  DETAIL:any;
  property_id: number;
  isLoading:boolean = false;

  constructor(private route: ActivatedRoute, private dataService:DataService) {
    this.property_id= this.route.snapshot.params.id;
  }

  ngOnInit(): void {
    this.getData()
  }

  async getData() {
    console.log(this.property_id)
    this.isLoading = true;
    this.DETAIL = await this.dataService.getDetail(this.property_id);
    this.isLoading = false;
    console.log("DETAIL",this.DETAIL);
  }
}
