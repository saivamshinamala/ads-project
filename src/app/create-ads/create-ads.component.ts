import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { FireauthserviceService } from '../services/fireauthservice.service';
@Component({
  selector: 'app-create-ads',
  templateUrl: './create-ads.component.html',
  styleUrls: ['./create-ads.component.scss'],
  providers: [AngularFireAuth, FireauthserviceService]
})
export class CreateAdsComponent implements OnInit {

  titleText: string;
  titleTag: string;
  budgetTitle: string;
  map = new Map<string, string>();
  adBudget: number = 10000;
  adViews: number = 100000;
  customers: number = 100000;
  appInstalls: number = 1000;
  signUp: number = 1000;
  sales: number = 1000;
  calls: number = 1000;

  txtImage: any[][] = [
    ["1. Create Ad", "../../assets/images/create.png"],
    ["2. PROMOTERS PROMOTE YOUR AD", "../../assets/images/mic.png"],
    ["3. GROW YOUR BUSINESS", "../../assets/images/money.png"]
  ];


  constructor(private fireService: FireauthserviceService, private router: Router) { 
    this.titleText = "Grow Your Business With Social Ads"
    this.titleTag = `Get More Sales, Customers Views,<br>Sineup, Calls, App Installs, Etc...`;
    this.budgetTitle = "Low Ad Budget High Results";
  }

  ngOnInit(): void {

  }

  isStrCurrent(currStr: string) {
    if(currStr === "AD BUDGET")
      return true;
    return false;
  }

  onSignInWithGoogle() {
    const result = this.fireService.signInWithGoogle();
    result.then(() => {
      this.router.navigateByUrl("add-ad");
    });
  }

  onValueChanged(event:any) {
    this.adViews = event * 10;
    this.customers = event * 10;
    this.appInstalls = event * 10;
    this.signUp = this.tenPercent(event);
    this.sales = this.tenPercent(event);
    this.calls = this.tenPercent(event);
  }


  tenPercent = (num: number) => (10 * num / 100);

  

}
