import { Component, OnInit, Renderer2 } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { SharedService } from '../services/shared.service';

@Component({
  selector: 'app-upload-dialog',
  templateUrl: './upload-dialog.component.html',
  styleUrls: ['./upload-dialog.component.scss']
})
export class UploadDialogComponent implements OnInit {

  adViews!: any;
  adBudget!: any;
  language = ["ENGLISH", "HINDI", "TELUGU"];
  languageClicked = false;

  constructor(private sharedService: SharedService, 
              private dialog: MatDialogRef<UploadDialogComponent>,
              private renderer: Renderer2) { }

  ngOnInit(): void {
  }

  onCreateAd() {
    this.sharedService.onAdCreated();
  }

  onValueChanged(event:number) {
    this.adViews = event * 10;
    this.adViews = this.sharedService.convertNum(this.adViews);
  }

  closeDialog() {
    this.dialog.close();
  }

  chooseLanguage(event?: any) {
    this.languageClicked = !this.languageClicked;
    document.querySelector(".material-icons")?.classList.toggle("rotateArrow");
  }

  onLangSelect(index: any) {
    console.log(index);
    this.chooseLanguage();
  }

}
