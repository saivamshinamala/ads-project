import { Component, OnInit } from '@angular/core';
import { SharedService } from '../services/shared.service';


const uri = "http://localhost:5000/ads-project-cf98e/us-central1/app/upload";

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})    
export class TestComponent implements OnInit {

  constructor(private sharedService: SharedService) {}

  ngOnInit(): void{}

  url: any;
  format: any;
  urlFromServer: any;

  onSelectFile(event: Event) {
    const target = event.target as HTMLInputElement;
    const file: File = (target.files as FileList)[0];
    if (file) {
      var reader = new FileReader();
      reader.readAsDataURL(file);
      if(file.type.indexOf('image')> -1){
        this.format = 'image';
      } else if(file.type.indexOf('video')> -1){
        this.format = 'video';
      }
      reader.onload = (event) => {
        this.url = (<FileReader>event.target).result;
        // console.log(this.url);
        // this.sharedService.postData(this.url).subscribe( res => {
        //   console.log(res);
        // });
      }
    }
  }

  onGetVideo() {
    this.sharedService.getUrlFormServer().subscribe(res =>{
      console.log(res);
    });
  }



}
