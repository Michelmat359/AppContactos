import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class LoginService {
  constructor() {
    console.log('Inicio Servicio Login');
  }

  login(user: string, password: string): boolean {
    return true;
  }

}
