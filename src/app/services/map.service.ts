import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BaseService } from './base.service';


@Injectable({
  providedIn: 'root'
})
export class MapService {

  constructor(private http: HttpClient,private baseService:BaseService) {}

  public async getList(): Promise<any> {
    const PATH= 'https://mapbox-2645c-default-rtdb.firebaseio.com/listing.json';
    return await this.baseService.sendGetRequest(PATH)
  }

  public async getMapInfo(): Promise<any> {
    const PATH= 'https://mapbox-2645c-default-rtdb.firebaseio.com/mapInfo.json';
    return await this.baseService.sendGetRequest(PATH)
  }


}

