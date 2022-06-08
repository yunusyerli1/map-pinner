import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

isLoading:boolean = false;

  constructor(private dataService: DataService,private ref: ChangeDetectorRef) {
  }

  ngAfterContentChecked() {
    this.ref.detectChanges();
  }

  ngOnInit(): void {

    this.dataService.getValue().subscribe((value) => {
      this.isLoading = value;
    });
    this.getData();
  }

  public async getData() {
     await this.dataService.getList();
  }

}
