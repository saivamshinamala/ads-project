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
    PromoteAdsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
