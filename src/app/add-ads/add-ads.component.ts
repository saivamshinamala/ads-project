import { Component, OnInit } from '@angular/core';
import { AdAdSkeleton } from '../adAdSkeleton';

@Component({
  selector: 'app-add-ads',
  templateUrl: './add-ads.component.html',
  styleUrls: ['./add-ads.component.scss']
})
export class AddAdsComponent implements OnInit {

  plusImgPath: string = "../../assets/images/Icon open-plus.png";
  adsArray: AdAdSkeleton[] = [];

  containers = [1];
  

  constructor() {
   }

  ngOnInit(): void {
  }

  add() {
    this.containers.push(this.containers.length);
  }

  onAddAd() {
    let adObject: AdAdSkeleton  = {
      adTitle: "Title",
      adVideoPath: "../../assets/images/create.png",
      promote: "PROMOTE",
      adViews: 10000,
      count: this.adsArray.length
    };
    this.adsArray.push(adObject);
  }

}
