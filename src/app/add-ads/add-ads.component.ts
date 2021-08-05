import { Component, OnInit } from '@angular/core';
import { AdAdSkeleton } from '../adAdSkeleton';

import { MatDialog } from '@angular/material/dialog';
import { UploadDialogComponent } from '../upload-dialog/upload-dialog.component';
import { SharedService } from '../services/shared.service';

@Component({
  selector: 'app-add-ads',
  templateUrl: './add-ads.component.html',
  styleUrls: ['./add-ads.component.scss']
})
export class AddAdsComponent implements OnInit {

  plusImgPath: string = "../../assets/images/Icon open-plus.png";
  adsArray: AdAdSkeleton[] = [];
  




  constructor(private dialog: MatDialog, private sharedService: SharedService) {
   }

  ngOnInit(): void {
    this.sharedService.destEvent$.subscribe(data => {
      this.onAddAd();
    });
  }

  onAddAd() {


    let adObject: AdAdSkeleton  = {
      adTitle: "Title",
      adVideoPath: "../../assets/images/create.png",
      promote: "PROMOTE",
      adViews: 10000,
    };
    this.adsArray.push(adObject);
    this.dialog.closeAll();
  }

  onPlusClicked() {
    const digRef = this.dialog.open(UploadDialogComponent);
  }

}
