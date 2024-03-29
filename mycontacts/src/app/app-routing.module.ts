import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then(m =>
      m.LoginPageModule)
  },
  {
    path: 'tabs',
    loadChildren: () => import('./tabs/tabs.module').then(m =>
      m.TabsPageModule)
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'contact',
    loadChildren: () => import('./contact/contact.module').then(m => m.ContactPageModule)
  },
  {
    path: 'contact',
    loadChildren: () => import('./contact/contact.module').then(m =>
      m.ContactPageModule)
  },
  {
    path: 'contacts/:id',
    loadChildren: () => import('./contact/contact.module').then(m =>
      m.ContactPageModule)
  },  {
    path: 'user',
    loadChildren: () => import('./user/user.module').then( m => m.UserPageModule)
  }


];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
