import { Component, OnInit } from '@angular/core';
import { Contact } from '../models/contact';
import { ContactsProvider } from '../services/contacts.service';
import { AlertController } from '@ionic/angular';


@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.page.html',
  styleUrls: ['./contacts.page.scss'],
})

export class ContactsPage implements OnInit {
  private myContacts: Contact[];
  constructor(private contacts: ContactsProvider, private alertCtrl: AlertController) { }
  ngOnInit() {
    console.log('ngOnInit ContactsPage');
    this.listContacts();
  }
  listContacts() {
    console.log('[ContactsPage] listContacts()');
    this.myContacts = this.contacts.listContacts().sort();
  }

  removeContact(contact: Contact) {
    console.log(`[ContactsPage] removeContact(${contact.id})`);
    this.alertCtrl.create({
      header: 'Eliminar contacto',
      message: '¿Estas seguro?',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          handler: () => { console.log('Cancel clicked'); }
        },
        {
          text: 'Aceptar',
          handler: () => {
            this.contacts.removeContact(contact.id);
            this.listContacts();
          }
        }
      ]
    }).then((alert) => alert.present());
  }
}

