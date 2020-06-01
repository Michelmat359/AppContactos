function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["contacts-contacts-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/contacts/contacts.page.html":
  /*!***********************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/contacts/contacts.page.html ***!
    \***********************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppContactsContactsPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\r\n  <ion-toolbar color=\"primary\">\r\n    <ion-title>Contacts</ion-title>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-menu-button></ion-menu-button>\r\n    </ion-buttons>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content padding>\r\n  <ion-list>\r\n    <ion-item-sliding *ngFor=\"let contact of myContacts\">\r\n      <ion-item routerLink=\"{{ '/contacts/' + contact.id }}\">\r\n        <ion-avatar slot=\"start\">\r\n          <img *ngIf=\"contact.avatar\" [src]=\"contact.avatar\">\r\n          <img *ngIf=\"!contact.avatar\" src=\"/assets/imgs/avatar.png\">\r\n        </ion-avatar>\r\n        <ion-label>{{ contact.name }} {{ contact.surname }}</ion-label>\r\n      </ion-item>\r\n      \r\n      <ion-item-options>\r\n        <ion-item-option routerLink=\"{{ '/contacts/' + contact.id }}\" [queryParams]=\"{mode: 'edit'}\">\r\n          <ion-icon name=\"create\"></ion-icon>\r\n          <ion-label>Edit</ion-label>\r\n        </ion-item-option>\r\n        <ion-item-option color=\"danger\" (click)=\"removeContact(contact)\">\r\n          <ion-icon name=\"trash\"></ion-icon>\r\n          <ion-label>Delete</ion-label>\r\n        </ion-item-option>\r\n      </ion-item-options>\r\n\r\n    </ion-item-sliding>\r\n  </ion-list>\r\n  <ion-fab vertical=\"bottom\" horizontal=\"end\">\r\n    <ion-fab-button color=\"primary\" routerLink=\"/contact\">\r\n      <ion-icon name=\"add\"></ion-icon>\r\n    </ion-fab-button>\r\n  </ion-fab>\r\n</ion-content>";
    /***/
  },

  /***/
  "./src/app/contacts/contacts-routing.module.ts":
  /*!*****************************************************!*\
    !*** ./src/app/contacts/contacts-routing.module.ts ***!
    \*****************************************************/

  /*! exports provided: ContactsPageRoutingModule */

  /***/
  function srcAppContactsContactsRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ContactsPageRoutingModule", function () {
      return ContactsPageRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _contacts_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./contacts.page */
    "./src/app/contacts/contacts.page.ts");

    var routes = [{
      path: '',
      component: _contacts_page__WEBPACK_IMPORTED_MODULE_3__["ContactsPage"]
    }];

    var ContactsPageRoutingModule = function ContactsPageRoutingModule() {
      _classCallCheck(this, ContactsPageRoutingModule);
    };

    ContactsPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], ContactsPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/contacts/contacts.module.ts":
  /*!*********************************************!*\
    !*** ./src/app/contacts/contacts.module.ts ***!
    \*********************************************/

  /*! exports provided: ContactsPageModule */

  /***/
  function srcAppContactsContactsModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ContactsPageModule", function () {
      return ContactsPageModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
    /* harmony import */


    var _contacts_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./contacts-routing.module */
    "./src/app/contacts/contacts-routing.module.ts");
    /* harmony import */


    var _contacts_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./contacts.page */
    "./src/app/contacts/contacts.page.ts");

    var ContactsPageModule = function ContactsPageModule() {
      _classCallCheck(this, ContactsPageModule);
    };

    ContactsPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _contacts_routing_module__WEBPACK_IMPORTED_MODULE_5__["ContactsPageRoutingModule"]],
      declarations: [_contacts_page__WEBPACK_IMPORTED_MODULE_6__["ContactsPage"]]
    })], ContactsPageModule);
    /***/
  },

  /***/
  "./src/app/contacts/contacts.page.scss":
  /*!*********************************************!*\
    !*** ./src/app/contacts/contacts.page.scss ***!
    \*********************************************/

  /*! exports provided: default */

  /***/
  function srcAppContactsContactsPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbnRhY3RzL2NvbnRhY3RzLnBhZ2Uuc2NzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/contacts/contacts.page.ts":
  /*!*******************************************!*\
    !*** ./src/app/contacts/contacts.page.ts ***!
    \*******************************************/

  /*! exports provided: ContactsPage */

  /***/
  function srcAppContactsContactsPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ContactsPage", function () {
      return ContactsPage;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _services_contacts_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../services/contacts.service */
    "./src/app/services/contacts.service.ts");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");

    var ContactsPage = /*#__PURE__*/function () {
      function ContactsPage(contacts, alertCtrl) {
        _classCallCheck(this, ContactsPage);

        this.contacts = contacts;
        this.alertCtrl = alertCtrl;
      }

      _createClass(ContactsPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          console.log('ngOnInit ContactsPage');
          this.listContacts();
        }
      }, {
        key: "listContacts",
        value: function listContacts() {
          console.log('[ContactsPage] listContacts()');
          this.myContacts = this.contacts.listContacts().sort();
        }
      }, {
        key: "removeContact",
        value: function removeContact(contact) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
            var _this = this;

            var alert;
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    console.log("[ContactsPage] removeContact(".concat(contact.id, ")"));
                    _context.next = 3;
                    return this.alertCtrl.create({
                      header: 'Eliminar contacto',
                      message: '¿Estas seguro?',
                      buttons: [{
                        text: 'Cancelar',
                        role: 'cancel',
                        handler: function handler() {
                          console.log('Cancelado');
                        }
                      }, {
                        text: 'Aceptar',
                        handler: function handler() {
                          _this.contacts.removeContact(contact.id);

                          _this.listContacts();
                        }
                      }]
                    });

                  case 3:
                    alert = _context.sent;
                    _context.next = 6;
                    return alert.present();

                  case 6:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));
        }
      }]);

      return ContactsPage;
    }();

    ContactsPage.ctorParameters = function () {
      return [{
        type: _services_contacts_service__WEBPACK_IMPORTED_MODULE_2__["ContactsProvider"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"]
      }];
    };

    ContactsPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-contacts',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./contacts.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/contacts/contacts.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./contacts.page.scss */
      "./src/app/contacts/contacts.page.scss"))["default"]]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_services_contacts_service__WEBPACK_IMPORTED_MODULE_2__["ContactsProvider"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"]])], ContactsPage);
    /***/
  }
}]);
//# sourceMappingURL=contacts-contacts-module-es5.js.map