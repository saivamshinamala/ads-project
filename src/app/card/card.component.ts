import { Component, OnInit } from '@angular/core';
import { SharedService } from '../services/shared.service';
import { FireauthserviceService } from '../services/fireauthservice.service';
import { Video } from '../interfaces/Video';
import { Ads } from '../interfaces/ads';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})

export class CardComponent implements OnInit {
  pop: any;
  ads: any[] = [];
  adVideos: Ads[] = [];
  videoUrl!: string;
  copyLink!: string;
  value = "hello";
  enableSpinner = true;

  constructor( private sharedService: SharedService,
               private fireService: FireauthserviceService) { }


  ngOnInit(): void {
    console.log("Hello world");
    this.sharedService.getAllAds()
    .subscribe(data => {
      console.log(data.length);
      data.forEach(ele =>  {
        this.adVideos = ele.Ads;
        for(let video of this.adVideos) {
          this.ads.push(video);
        }
        this.enableSpinner = false;
      });

      for(let video of this.ads) {
        console.log(video);
      }
      
    });
  }

  video(data: any){
    this.videoUrl = data;
    this.pop=<HTMLDivElement>document.getElementById("video");
    this.pop.classList.toggle("active");
  }

  copy(data: any){
    this.copyLink = data;
    this.pop=<HTMLDivElement>document.getElementById("copy");
    this.pop.classList.toggle("active");
  }

  paste(){
    this.pop=<HTMLDivElement>document.getElementById("paste");
    this.pop.classList.toggle("active");
  }

  close() {
    this.pop.classList.toggle("active");
  }
}