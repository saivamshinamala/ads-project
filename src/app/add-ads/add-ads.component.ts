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
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-add-ads',
  templateUrl: './add-ads.component.html',
  styleUrls: ['./add-ads.component.scss'],
  providers: [AngularFireAuth, FireauthserviceService]
})
export class AddAdsComponent implements OnInit {

  plusImgPath: string = "../../assets/images/Icon open-plus.png";
  adsArray: any[] = [];  
  displayName!: string;
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
    this.sharedService.getUserAds(localStorage.getItem("userId"))
    .pipe(map(videos => {
      return videos.map(video => {
        return {
          creatorId: video.creatorId,
          videoid: video._id,
          link: environment.base_url + "redirect?videoid="+  video._id,
          title: video.title,
          views: video.views,
          video: video.video,
          budget: video.budget,
          language: video.language,
          pastelink: video.pastelink
          }
      })
    }))
    .subscribe(res => {
      console.log("result = ", res);
      this.adsArray = res
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
      localStorage.removeItem("userId");
      localStorage.removeItem("name");
      this.router.navigateByUrl("/");
    });
  }
}
