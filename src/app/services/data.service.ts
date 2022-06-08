import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BaseService } from './base.service';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  LIST:any;

  constructor(private http: HttpClient,private baseService:BaseService) {}


  public async getList(): Promise<any> {
      const PATH= '/listItems.aspx?listID=5363950&token=5AE7DFB40500DDC03BC84BD3F0A8AC0F18784B1E&receipt=undefined';
      this.LIST = await this.baseService.sendGetRequest(environment.path + PATH );
      return this.LIST;
  }

  public async getDetail(propertyID): Promise<any> {
      const PATH= `/propertyItem.aspx?listID=5363950&token=5AE7DFB40500DDC03BC84BD3F0A8AC0F18784B1E&propertyID=${propertyID}`;
      this.LIST = await this.baseService.sendGetRequest(environment.path + PATH);
      return this.LIST;
  }
}
