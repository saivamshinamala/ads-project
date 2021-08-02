import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ads-project';
  socialLinks: any[][] = [
    ["../../assets/images/fb.png", ""],
    ["../../assets/images/youtube-icon.png", "https://www.youtube.com/channel/UCuBGQhAs9Dlc9qvmd5qdV3w"],
    ["../../assets/images/google.png", ""],
    ["../../assets/images/insta.png", "https://www.instagram.com/aads.aads.aads/"],
    ["../../assets/images/twitter.png", "https://twitter.com/aadsaadsaads?s=08"],
    ["../../assets/images/linkedin.png", "https://www.linkedin.com/in/aads-646b4a218/"],
  ]
}
