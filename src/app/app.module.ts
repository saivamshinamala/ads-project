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
import { AddAdsComponent } from './add-ads/add-ads.component';

const firebaseConfig = {
  apiKey: "AIzaSyDhH0xx3RZVVJeY1t0BGumF15A6YHaiNHI",
  authDomain: "ads-project-cf98e.firebaseapp.com",
  projectId: "ads-project-cf98e",
  storageBucket: "ads-project-cf98e.appspot.com",
  messagingSenderId: "697516953016",
  appId: "1:697516953016:web:4e72a1898668dfe577d34d",
  measurementId: "G-FCYGT2EYNJ"
};

@NgModule({
  declarations: [
    AppComponent,
    CreateAdsComponent,
    MenuComponent,
    PromoteAdsComponent,
    AddAdsComponent
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
