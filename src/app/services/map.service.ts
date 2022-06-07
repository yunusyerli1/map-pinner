import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BaseService } from './base.service';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import { Observable } from 'rxjs/internal/Observable';


@Injectable({
  providedIn: 'root'
})
export class MapService {

  LIST:any;
  isDataLoading: BehaviorSubject<boolean>;

  constructor(private http: HttpClient,private baseService:BaseService) {
    this.isDataLoading = new BehaviorSubject<boolean>(false);
  }
  setValue(newValue): void {
    this.isDataLoading.next(newValue);
  }
  getValue(): Observable<boolean> {
    return this.isDataLoading.asObservable();
  }

  public async getList(): Promise<any> {
    if (this.LIST != undefined) {
      return this.LIST;
    } else {
      this.setValue(true);
      const PATH= 'https://app.smartapartmentdata.com/List/json/listItems.aspx?listID=5363950&token=5AE7DFB40500DDC03BC84BD3F0A8AC0F18784B1E&receipt=undefined';
      this.LIST = await this.baseService.sendGetRequest(PATH);
      this.setValue(false);
      return this.LIST;
    }


  }


}

