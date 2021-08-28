import { Component, OnInit } from '@angular/core';
import { AdAdSkeleton } from '../interfaces/adAdSkeleton';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { FireauthserviceService } from '../services/fireauthservice.service';

import { MatDialog } from '@angular/material/dialog';
import { UploadDialogComponent } from '../upload-dialog/upload-dialog.component';
import { SharedService } from '../services/shared.service';
import { Video } from '../interfaces/Video';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-add-ads',
  templateUrl: './add-ads.component.html',
  styleUrls: ['./add-ads.component.scss'],
  providers: [AngularFireAuth, FireauthserviceService]
})
export class AddAdsComponent implements OnInit {

  plusImgPath: string = "../../assets/images/Icon open-plus.png";
  adsArray: Video[] = [];  displayName!: string;
  enableSpinner = true;


  clickEventsubscription:Subscription;

  constructor(private dialog: MatDialog, 
              private sharedService: SharedService,
              private fireService: FireauthserviceService, 
              private router: Router) {

              this.clickEventsubscription = this.sharedService.getRequestToReload().subscribe(()=>{
                this.getAdsToUpdateUI();
              });
            }

  ngOnInit(): void {
    this.displayName = localStorage.getItem("name") as string;
    this.getAdsToUpdateUI();
  }

  getAdsToUpdateUI() {
    this.sharedService.getUserAds(localStorage.getItem("id")).subscribe(res => {
      console.log("result = ", res.Ads);
      this.adsArray = res.Ads
      this.enableSpinner = false;
    });
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
      localStorage.removeItem("id");
      localStorage.removeItem("name");
      this.router.navigateByUrl("/");
    });
  }
}
