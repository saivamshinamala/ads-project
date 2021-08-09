import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})

export class CardComponent implements OnInit {
  pop: any;
  constructor() {
  }
  ngOnInit(): void {
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