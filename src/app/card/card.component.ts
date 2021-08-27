import { Component, OnInit } from '@angular/core';
import { SharedService } from '../services/shared.service';
import { FireauthserviceService } from '../services/fireauthservice.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})

export class CardComponent implements OnInit {
  pop: any;
  constructor( private sharedService: SharedService,
               private fireService: FireauthserviceService) {
  }
  ngOnInit(): void {
    this.sharedService.getUserAds().subscribe(res=>{
      console.log("Working Fine "+res);
    });
  }
  video(){
    this.pop=<HTMLDivElement>document.getElementById("video");
    this.pop.classList.toggle("active");
  }
  copy(){
    this.pop=<HTMLDivElement>document.getElementById("copy");
    this.pop.classList.toggle("active");
  }
  paste(){
    this.pop=<HTMLDivElement>document.getElementById("paste");
    this.pop.classList.toggle("active");
  }
}