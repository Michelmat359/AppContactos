import { Injectable } from '@angular/core';
import { LoginService } from './login.service';
import { User } from '../models/user';
@Injectable({
  providedIn: 'root'
})
export class LocationService {
  private status = 'stopped';
  private watcher: any;
  constructor(private login: LoginService) {
    console.log('Hello LocationService');
  }
  startTracking() {
    console.log('[LocationService] startTracking()');
    if (this.status === 'running') return;
    this.status = 'running';
    this.watcher = navigator.geolocation.watchPosition(
      (position) => {
        console.log('[LocationService] location obtained');
        let user = this.login.getUser();
        user.position = {
          lat: position.coords.latitude,
          lon: position.coords.longitude,
          ts: position.timestamp
        };
        this.login.updateUser(user)
          .then((user: User) => {
            console.log('[LocationService] user location updated');
          });
      },
      (err) => {
        console.log('[LocationService] error obtaining location');
      }
    );
  }
  stopTracking() {
    console.log('[LocationService] stopTracking()');
    if (status === 'stopped') return;
    this.status = 'stopped';
    navigator.geolocation.clearWatch(this.watcher);
  }
  
  getStatus() {
    console.log('[LocationService] getStatus()');
    return this.status;
  }
}