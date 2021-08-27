import { Component, OnInit } from '@angular/core';
import { FireauthserviceService } from '../services/fireauthservice.service';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth';

@Component({
  selector: 'app-login-menu',
  templateUrl: './login-menu.component.html',
  styleUrls: ['./login-menu.component.scss'],
  providers: [ AngularFireAuth, FireauthserviceService]
})
export class LoginMenuComponent implements OnInit {

  constructor( private fireService: FireauthserviceService,
               private router: Router) { }

  ngOnInit(): void {
  }

  logout(){
    const result = this.fireService.signOut();
    result.then(() => {
      this.router.navigateByUrl("promote");
    });
  }
}
