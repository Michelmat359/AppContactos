import { Component, OnInit } from '@angular/core';
import { MenuController, ModalController } from '@ionic/angular';
import { Router } from '@angular/router';
import { User } from '../models/user';
import { UserPage } from '../user/user.page';
import { LoginService } from '../services/login.service';


@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})


export class TabsPage implements OnInit {
  private user: User;
  constructor(private login: LoginService, private router: Router, private modalCtrl: ModalController) { }

  
  ngOnInit() {
    this.user = this.login.getUser();
  }


  editUser() {
    console.log('[TabsPage] editUser()');
    this.modalCtrl.create({
      component: UserPage,
    }).then((modal) => {
      modal.onDidDismiss()
        .then((evt) => this.user = this.login.getUser());
      modal.present();
    });
  }


  doExit() {
    console.log('[TabsPage] doExit()');
    this.router.navigateByUrl('/login');
  }
}