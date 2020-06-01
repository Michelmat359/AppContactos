import { Injectable } from '@angular/core';
import { LoginService } from './login.service';
import { HttpClient } from '@angular/common/http';
import { Contact } from '../models/contact';
@Injectable({
  providedIn: 'root'
})
export class RESTContactsService {
  /* Mirar esta URL */
  private rootUrl = 'http://localhost:8080/mycontacts';
  constructor(private login: LoginService, private http: HttpClient) { }
  addContact(contact: Contact): Promise<Contact> {
    console.log('[RESTContactsService] addContact()');
    let user = this.login.getUser();
    return new Promise((resolve, reject) => {
      let url = this.rootUrl + `/users/${user.id}/contacts`;
      this.http.post(url, contact, { params: { token: this.login.getToken() } })
        .subscribe(
          (contact: Contact) => { resolve(contact); },
          (err) => { reject(err); }
        );
    });
  }

  listContactById(id: number): Promise<Contact> {
    console.log(`[RESTContactsService] listContactById(${id})`);
    let user = this.login.getUser();
    return new Promise((resolve, reject) => {
      let url = this.rootUrl + `/users/${user.id}/contacts/${id}`;
      let params: any = { token: this.login.getToken() };
      this.http.get(url, { params: params })
        .subscribe(
          (contact: Contact) => { resolve(contact); },
          (err) => { reject(err); }
        );
    });
  }

  listContacts(query?: string): Promise<Contact[]> {
    console.log('[RESTContactsService] listContacts()');
    let user = this.login.getUser();
    return new Promise((resolve, reject) => {
      let url = this.rootUrl + `/users/${user.id}/contacts`;
      let params: any = { token: this.login.getToken() };
      if (query) {
        params.q = query
      }
      this.http.get(url, { params: params })
        .subscribe(
          (contacts: Contact[]) => { resolve(contacts); },
          (err) => { reject(err); }
        );
    });
  }
  
  updateContact(contact: Contact): Promise<Contact> {
    console.log('[RESTContactsService] updateContact()');
    let user = this.login.getUser();
    return new Promise((resolve, reject) => {
      let url = this.rootUrl + `/users/${user.id}/contacts/${contact.id}`;
      this.http.put(url, contact, { params: { token: this.login.getToken() } })
        .subscribe(
          (contact: Contact) => { resolve(contact); },
          (err) => { reject(err); }
        );
    });
  }

  removeContact(id: number): Promise<void> {
    console.log('[RESTContactsService] removeContact()');
    let user = this.login.getUser();
    return new Promise((resolve, reject) => {
      let url = this.rootUrl + `/users/${user.id}/contacts/${id}`;
      this.http.delete(url, { params: { token: this.login.getToken() } })
        .subscribe(
          () => { resolve(); },
          (err) => { reject(err); }
        );
    });
  }
}
