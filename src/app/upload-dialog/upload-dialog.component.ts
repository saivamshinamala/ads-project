import { Component, OnInit, Renderer2 } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { SharedService } from '../services/shared.service';
import { Video } from '../interfaces/Video';
import { FireauthserviceService } from '../services/fireauthservice.service';

@Component({
  selector: 'app-upload-dialog',
  templateUrl: './upload-dialog.component.html',
  styleUrls: ['./upload-dialog.component.scss']
})
export class UploadDialogComponent implements OnInit {

  url: any;
  format: any;
  id: any;

  enableSpinner = false;

  adViews!: number;
  adBudget!: number;
  language = ["ENGLISH", "HINDI", "TELUGU"];
  languageClicked = false;
  adTitle!: string;
  adLink!: string;
  adLanguage!: string;

  isUploaded = false;
  uploadResult!: string;


  constructor(private sharedService: SharedService, 
              private fireService: FireauthserviceService,
              private dialog: MatDialogRef<UploadDialogComponent>,
              private renderer: Renderer2) { }

  ngOnInit(): void {
    this.fireService.sendId().then(data=>{
      data?.providerData.forEach((profile) =>{
        if(profile!=null)
          this.id=profile.email;
        else
          this.id="";
      });
    });
  }

  onSelectFile(event: Event) {
    const target = event.target as HTMLInputElement;
    const file: File = (target.files as FileList)[0];
    if (file) {
      var reader = new FileReader();
      reader.readAsDataURL(file);
      if(file.type.indexOf('video')> -1){
        this.format = 'video';
        this.enableSpinner = true;
      }
      reader.onload = (event) => {
        this.url = (<FileReader>event.target).result;
        console.log(this.url);
        this.enableSpinner = false;
      }
    }
  }

  onCreateAd(data: any) {
    console.log(data);
    console.log("adViews ", this.adViews, " adBudget ", this.adBudget, " language ", this.adLanguage, " adtitle ", this.adTitle, " adLink ", this.adLink);
    // this.adObject.language = this.adLanguage;
    const adObject: Video = {
      link: data.adLink,
      title: data.adTitle,
      views: (data.adBudget as number) * 10,
      video: this.url,
      budget: (data.adBudget as number),
      language: this.adLanguage,
      pastelink: []
    };
    this.enableSpinner = true;
    
    this.sharedService.postData(this.id, adObject).subscribe( res => {
      console.log(res);
      this.isUploaded = true;
      this.uploadResult = res.message;
      this.enableSpinner = false;
      setTimeout(() => {
        this.closeDialog();
    }, 5000);
    });


    

    // this.sharedService.onAdCreated();
    // this.sharedService.postData();
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
    this.adLanguage = this.language[index];
    this.chooseLanguage();
  }

}
