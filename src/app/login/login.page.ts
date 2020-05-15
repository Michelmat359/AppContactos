import { Component, OnInit } from '@angular/core';
import { LoginService } from '../services/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})

export class LoginPage implements OnInit {
  user: string;
  password: string;
  
  constructor(private login: LoginService, private router: Router) { }
  
  ngOnInit() { }
  
  doLogin() {
    console.log('[LoginPage] doLogin()');
    if (this.login.login(this.user, this.password))
      this.router.navigateByUrl('/tabs');
  }
  
}