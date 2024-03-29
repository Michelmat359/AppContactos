import { Component, OnInit, OnDestroy, ChangeDetectorRef,  } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Contact } from '../models/contact';
import { ContactsProvider } from '../services/contacts.service';
import { AlertController } from '@ionic/angular';
import { RESTContactsService } from '../services/restcontacts.service';
import { LocationService } from '../services/location.service';
import { Event, NavigationEnd } from '@angular/router';



@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.page.html',
  styleUrls: ['./contacts.page.scss'],
})

export class ContactsPage implements OnInit, OnDestroy {
  private myContacts: Contact[];

  constructor( private router: Router, private location: LocationService, private contacts: RESTContactsService, private alertCtrl: AlertController, private subscription: Subscription, private changes: ChangeDetectorRef) { }

  ngOnInit() {
    console.log('ngOnInit ContactsPage');
    this.subscription = this.router.events.subscribe((e: any) => {
      if (e instanceof NavigationEnd
        && e.urlAfterRedirects == '/tabs/contacts') {
        this.listContacts();
      }
    });
    this.listContacts();
  }


  ngOnDestroy() {
    console.log('ngOnDestroy ContactsPage');
    this.subscription.unsubscribe();
  }

  listContacts() {
    console.log('[ContactsPage] listContacts()');
    this.contacts.listContacts()
      .then((contacts) => {
        this.myContacts = contacts.sort();
        this.changes.detectChanges();
      });
  }

  async removeContact(contact: Contact) {
    console.log(`[ContactsPage] removeContact(${contact.id})`);
    const alert = await this.alertCtrl.create({
      header: 'Eliminar contacto',
      message: '¿Estas seguro?',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          handler: () => { console.log('Cancelado'); }
        },
        {
          text: 'Aceptar',
          handler: () => {
            this.contacts.removeContact(contact.id)
              .then(() => this.listContacts());

          }
        }
      ]
    });
    await alert.present();
  }



}

