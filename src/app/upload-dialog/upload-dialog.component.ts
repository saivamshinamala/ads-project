import { Component, OnInit } from '@angular/core';
import { SharedService } from '../services/shared.service';

@Component({
  selector: 'app-upload-dialog',
  templateUrl: './upload-dialog.component.html',
  styleUrls: ['./upload-dialog.component.scss']
})
export class UploadDialogComponent implements OnInit {

  adViews!: number;
  adBudget!: number;

  constructor(private sharedService: SharedService) { }

  ngOnInit(): void {
  }

  onCreateAd() {
    this.sharedService.onAdCreated();
  }

  onValueChanged(event:number) {
    this.adViews = event * 10;
  }

}
