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
}
