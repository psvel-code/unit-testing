import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root',
})
export class HttpService {
  appUrl = environment.app_url;
  constructor(private http: HttpClient) {}

  getMethod(url: any) {
    return this.http.get(this.appUrl + url);
  }
  postMethod(url: any, data: any) {
    return this.http.post(this.appUrl + url, data);
  }
}
