import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import { Md5 } from 'ts-md5/dist/md5';
import { Video } from '../interfaces/Video';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  private sourceEvent = new Subject<any>();
  destEvent$ = this.sourceEvent.asObservable();

  constructor(private httpClient: HttpClient) { }

  onAdCreated() {
    this.sourceEvent.next();
  }

  convertNum(num: any) {
    num = num.toString();
    let lastThree = num.substring(num.length - 3);
    let otherNumbers = num.substring(0, num.length - 3);
    if(otherNumbers != '')
        lastThree = ',' + lastThree;
    let inr = otherNumbers.replace(/\B(?=(\d{2})+(?!\d))/g, ",") + lastThree;
    return inr;
  }

  convertNumToInr(num: any) {
    return "₹" + this.convertNum(num);
  }

  postData(id: any, data: any) {
    let params=new HttpParams().append("id", id);
    return this.httpClient.post<{message: any}>("http://localhost:5000/ads-project-cf98e/us-central1/app/upload", data, {params: params});
  }

  getUserAds() {
    let params = new HttpParams().append("keyword", Md5.hashStr("namalasaivamshi@gmail.com"));
    return this.httpClient.get<Video[]>("http://localhost:5000/ads-project-cf98e/us-central1/app/ads", {params: params});
  }

  getUrlFormServer() {
    return this.httpClient.get("http://localhost:5000/ads-project-cf98e/us-central1/app/getVideo");
  }
}
