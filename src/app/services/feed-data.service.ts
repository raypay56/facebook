import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class FeedDataService {

  constructor(private http: HttpClient) { }

  public getFeedData(){
    const feedDataUrl = 'assets/datasource.json';
    return this.http.get(feedDataUrl);
  }
}
