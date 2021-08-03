import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreateAdsComponent } from './create-ads/create-ads.component';
import { MenuComponent } from './menu/menu.component';
import { PromoteAdsComponent } from './promote-ads/promote-ads.component';
import { LoginMenuComponent } from './login-menu/login-menu.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CardComponent } from './card/card.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule} from '@angular/material/card'; 

const firebaseConfig = {
  apiKey: "AIzaSyDqEZbCiCpuWb1MkyWz9ckN3A0_RLHNsV4",
  authDomain: "ads-project-82c4b.firebaseapp.com",
  projectId: "ads-project-82c4b",
  storageBucket: "ads-project-82c4b.appspot.com",
  messagingSenderId: "849973389403",
  appId: "1:849973389403:web:91498beced99a25cf0777e",
  measurementId: "G-62GPK77ED1"
};

@NgModule({
  declarations: [
    AppComponent,
    CreateAdsComponent,
    MenuComponent,
    PromoteAdsComponent,
    LoginMenuComponent,
    CardComponent
  ],
  imports: [
    BrowserModule,
    MatCardModule,
    AppRoutingModule,
    FormsModule,
    AngularFireModule.initializeApp(firebaseConfig),
    NgbModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
