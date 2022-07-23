import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { DataService } from '../services/data.service';
import { DataStore } from '../services/data.store';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

isLoading:boolean = false;

//gencies$ = Observable<any[]>;

  constructor(
    private dataService: DataService,
    private ref: ChangeDetectorRef,
    private dataStore:DataStore
    ) {}

  ngAfterContentChecked() {
    this.ref.detectChanges();
  }

  ngOnInit(): void {
    this.getData();
    //this.agencies$ = this.dataStore.agencies$;
    //console.log(this.dataStore.agencies$)
  }

  public async getData() {
    this.isLoading = true;
     await this.dataService.getList();
     this.isLoading = false;
  }

}
