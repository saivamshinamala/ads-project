import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { AddAdsComponent } from '../add-ads/add-ads.component';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  private sourceEvent = new Subject<any>();
  destEvent$ = this.sourceEvent.asObservable();

  constructor() { }

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
}
