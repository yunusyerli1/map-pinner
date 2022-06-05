import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BaseService {

  constructor(private http: HttpClient) { }

  public async sendGetRequest(path) {
    try {
      let result = await this.http.get<any>(path).toPromise();
      return result;
    } catch (error) {
      return error;
    }
  }

}
