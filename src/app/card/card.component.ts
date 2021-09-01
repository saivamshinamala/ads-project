import { Component, OnInit } from '@angular/core';
import { SharedService } from '../services/shared.service';
import { FireauthserviceService } from '../services/fireauthservice.service';
import { Video } from '../interfaces/Video';
import { Ads } from '../interfaces/ads';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

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
    .pipe(map(videos => {
      return videos.map(video => {
        console.log(video.creatorId);
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
    .subscribe(data => {
      console.log(data);
      this.ads = data;
      this.enableSpinner = false;   
      console.log(data);
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