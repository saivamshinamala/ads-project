import { Component, OnInit } from '@angular/core';
import { AdAdSkeleton } from '../adAdSkeleton';

@Component({
  selector: 'app-add-ads',
  templateUrl: './add-ads.component.html',
  styleUrls: ['./add-ads.component.scss']
})
export class AddAdsComponent implements OnInit {

  plusImgPath: string = "../../assets/images/Icon open-plus.png";
  adsArray!: AdAdSkeleton[];

  constructor() { }

  ngOnInit(): void {
  }

  onAddAd() {
    console.log("onAddAd clicked");
  }

}
