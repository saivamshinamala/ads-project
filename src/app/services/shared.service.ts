import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import { Md5 } from 'ts-md5/dist/md5';
import { Ads } from '../interfaces/ads';
import { PromoteAds } from '../interfaces/promoteAds';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  constructor(private httpClient: HttpClient) { }

  private subject = new Subject<any>();

  private base_url = "http://localhost:5000/ads-project-cf98e/us-central1/app/";


  sendRequestToReload() {
    this.subject.next();
  }
  getRequestToReload(): Observable<any>{ 
    return this.subject.asObservable();
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

  compare(item1: any, item2: any) {
    if (item1.budget < item2.budget){
      return -1;
    }
    if (item1.budget > item2.budget){
      return 1;
    }
    return 0;
  }

  postData(id: any, data: any) {
    let params=new HttpParams().append("id", id);
    console.log("id = ", id);
    return this.httpClient.post<{message: any}>(this.base_url + "upload", data, {params: params});
  }

  getUserAds(id: any) {
    console.log("id = ", id);
    let params = new HttpParams().append("id", id);
    return this.httpClient.get<Ads>(this.base_url + "user-ads", {params: params});
  }

  getUrlFormServer() {
    return this.httpClient.get(this.base_url + "getVideo");
  }

  getAllAds() {
    return this.httpClient.get<PromoteAds[]>(this.base_url + "getAds");
  }
}
