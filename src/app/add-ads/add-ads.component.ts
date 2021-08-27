import { Component, OnInit } from '@angular/core';
import { AdAdSkeleton } from '../interfaces/adAdSkeleton';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { FireauthserviceService } from '../services/fireauthservice.service';

import { MatDialog } from '@angular/material/dialog';
import { UploadDialogComponent } from '../upload-dialog/upload-dialog.component';
import { SharedService } from '../services/shared.service';

@Component({
  selector: 'app-add-ads',
  templateUrl: './add-ads.component.html',
  styleUrls: ['./add-ads.component.scss'],
  providers: [AngularFireAuth, FireauthserviceService]
})
export class AddAdsComponent implements OnInit {

  plusImgPath: string = "../../assets/images/Icon open-plus.png";
  adsArray: AdAdSkeleton[] = [];




  constructor(private dialog: MatDialog, 
              private sharedService: SharedService,
              private fireService: FireauthserviceService, 
              private router: Router) { }

  ngOnInit(): void {

    this.sharedService.getUserAds().subscribe(res => {
      for(let i = 0; i < res.length; i++) {
        this.onAddAd();
      }
    })
  }

  onAddAd() {
    let adObject: AdAdSkeleton  = {
      adTitle: "Title",
      adVideoPath: "../../assets/images/create.png",
      promote: "PROMOTE",
      adBudget: 10000,
      displayDelete: false,
      displayPromote: false
    };
    this.adsArray.push(adObject);
    this.dialog.closeAll();
  }

  onPlusClicked() {
    const digRef = this.dialog.open(UploadDialogComponent);
  }

  onThreeDotsClicked(index: number) {
    this.adsArray[index].displayDelete = !this.adsArray[index].displayDelete;
  }

  toggleBudgetPromote(index: number) {
    this.adsArray[index].displayPromote = !this.adsArray[index].displayPromote;
    this.adsArray[index].displayDelete = false;
  }

  convertNumToInr(num: any) {
    return this.sharedService.convertNumToInr(num);
  }

  logout(){
    const result = this.fireService.signOut();
    result.then(() => {
      this.router.navigateByUrl("");
    });
  }
}
