import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import auth from 'firebase/app';

@Injectable({
  providedIn: 'root'
})
export class FireauthserviceService {

  constructor(public  afAuth:  AngularFireAuth, public  router:  Router) { }

  async sendId(){
    return await this.afAuth.currentUser;
  }

  async signInWithGoogle() {
    return await this.afAuth.signInWithPopup(new auth.auth.GoogleAuthProvider);
  }

  async signOut() {
    return await this.afAuth.signOut();
  }
}
