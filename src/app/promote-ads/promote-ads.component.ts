import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FireauthserviceService } from '../services/fireauthservice.service';
import { SharedService } from '../services/shared.service';

@Component({
  selector: 'app-promote-ads',
  templateUrl: './promote-ads.component.html',
  styleUrls: ['./promote-ads.component.scss']
})
export class PromoteAdsComponent implements OnInit {

  titleText: any;
  titleTag: any;
  budgetTitle: any;
  tenPercent = (num: number) => (10 * num / 100);
  youTubeViews: any = 100000;
  earnings: any = this.tenPercent(this.youTubeViews);

  txtImage: any[][] = [
    ["1. Download Ads", "../../assets/images/download.png"],
    ["2. Place Ads On Your Videos", "../../assets/images/youtube.png"],
    ["3. Earn Money", "../../assets/images/earn money.png"]
  ];

  socialLinks: any[][] = [
    ["../../assets/images/fb.png", ""],
    ["../../assets/images/youtube.png", "https://www.youtube.com/channel/UCuBGQhAs9Dlc9qvmd5qdV3w"],
    ["../../assets/images/google.png", ""],
    ["../../assets/images/insta.png", "https://www.instagram.com/aads.aads.aads/"],
    ["../../assets/images/twitter.png", "https://twitter.com/aadsaadsaads?s=08"],
    ["../../assets/images/linkedin.png", "https://www.linkedin.com/in/aads-646b4a218/"],
  ]

  constructor(private fireService: FireauthserviceService, 
              private router: Router,
              private sharedService: SharedService) { 
    this.titleText = "Earn More Money With Social Ads"
    this.titleTag = `Promote Ads On Your Website, <br>YouTube, Instagram, Facebook,<br>Twitter, Etc...`;
    this.budgetTitle = "EARNING FILTER";

    this.earnings = this.sharedService.convertNumToInr(this.earnings);
  }

  ngOnInit(): void {
  }

  onSignInWithGoogle() {
    const result = this.fireService.signInWithGoogle();
    result.then( () => {
      this.router.navigateByUrl("card");
    });
  }

  onValueChanged(event:any) {
    this.earnings = this.tenPercent(event);
    this.earnings = this.sharedService.convertNumToInr(this.earnings);
  }

}
