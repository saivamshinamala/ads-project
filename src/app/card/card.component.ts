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
  popUP(){
    this.pop=<HTMLDivElement>document.getElementById("popup-1");
    this.pop.classList.toggle("active");
  }
}