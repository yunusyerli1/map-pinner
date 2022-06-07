import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { MapService } from '../services/map.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

isLoading:boolean = false;

  constructor(private mapService: MapService,private ref: ChangeDetectorRef) {

    //this.isLoading = this.mapService.isDataLoading;
  }

  ngAfterContentChecked() {
    this.ref.detectChanges();
  }

  ngOnInit(): void {

    this.mapService.getValue().subscribe((value) => {
      this.isLoading = value;
    });

  }

}
