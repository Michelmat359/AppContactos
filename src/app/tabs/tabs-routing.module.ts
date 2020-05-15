import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'contacts',
        loadChildren: () => import('../contacts/contacts.module').then( m =>
       m.ContactsPageModule)
        },
        {
        path: 'search',
        loadChildren: () => import('../search/search.module').then( m =>
       m.SearchPageModule)
        },
        {
        path: 'map',
        loadChildren: () => import('../map/map.module').then( m =>
       m.MapPageModule)
        },       
      {
        path: '',
        redirectTo: '/tabs/contacts',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/contacts',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsPageRoutingModule {}
