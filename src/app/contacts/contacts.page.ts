import { Component, OnInit } from '@angular/core';
import { Contact } from '../models/contact';
import { ContactsProvider } from '../services/contacts.service';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.page.html',
  styleUrls: ['./contacts.page.scss'],
})

export class ContactsPage implements OnInit {
  private myContacts: Contact[];
  constructor(private contacts: ContactsProvider) { }
  ngOnInit() {
    console.log('ngOnInit ContactsPage');
    this.listContacts();
  }
  listContacts() {
    console.log('[ContactsPage] listContacts()');
    this.myContacts = this.contacts.listContacts().sort();
  }
}

