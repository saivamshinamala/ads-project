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
import { LoginMenuComponent } from './login-menu/login-menu.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CardComponent } from './card/card.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule} from '@angular/material/card';
import { SampleComponent } from './sample/sample.component';
import { UploadDialogComponent } from './upload-dialog/upload-dialog.component';
import { MatDialogModule } from '@angular/material/dialog';
import { CopyrightloginComponent } from './copyrightlogin/copyrightlogin.component';

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
    AddAdsComponent,
    LoginMenuComponent,
    CardComponent,
    SampleComponent,
    UploadDialogComponent,
    CopyrightloginComponent
  ],
  imports: [
    BrowserModule,
    MatCardModule,
    AppRoutingModule,
    FormsModule,
    AngularFireModule.initializeApp(firebaseConfig),
    NgbModule,
    BrowserAnimationsModule,
    MatDialogModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
