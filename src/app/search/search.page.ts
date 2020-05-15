import { Component, OnInit } from '@angular/core';
import { Contact } from '../models/contact';
import { ContactsProvider } from '../services/contacts.service';

@Component({
 selector: 'app-search',
 templateUrl: './search.page.html',
 styleUrls: ['./search.page.scss'],
})

export class SearchPage implements OnInit {
 private results: Contact[] = [];
 constructor(private contacts: ContactsProvider) { }
 ngOnInit() {
 this.results = this.contacts.listContacts();
 }
 search(ev) {
  let query = ev.target.value.trim();
  this.results = this.contacts.listContacts(query);
  }
 }