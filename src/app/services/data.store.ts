
import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { BaseService } from "./base.service";
import { DataService } from "./data.service";
import { BehaviorSubject, Observable } from "rxjs";
import { tap } from "rxjs/operators";
import { environment } from "src/environments/environment";



@Injectable({
  providedIn: 'root'
})
export class DataStore {

  private subject = new BehaviorSubject<any[]>([]);

  agencies$:Observable<any> = this.subject.asObservable();

  constructor(
    private http: HttpClient,
    private baseService: BaseService,
    private dataService: DataService) {

    this.loadAllAgencies();
  }

   private loadAllAgencies() {
    const PATH= '/listItems.aspx?listID=5363950&token=5AE7DFB40500DDC03BC84BD3F0A8AC0F18784B1E&receipt=undefined';
    const loadAgencies$ = this.http.get<any[]>(environment.path + PATH).pipe(
      tap(agencies => this.subject.next(agencies))
    )
  }

  public  getList(): Observable<any> {
    return this.agencies$.pipe(

    )
  }
}
