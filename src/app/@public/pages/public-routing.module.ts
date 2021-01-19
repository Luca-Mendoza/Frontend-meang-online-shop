import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PublicComponent } from './public.component';

const routes: Routes = [
  {
    path: '',
    component: PublicComponent,
    children: [
      // @public --> pages --> Home
      {
        path: '',
        loadChildren: () => import('./home/home.module').then(m => m.HomeModule)
      },
      // @public --> pages --> contact
      {
        path: 'contact',
        loadChildren: () => import('./contact/contact.module').then(m => m.ContactModule)
      },
      // @public --> pages --> LogearUser
      {
        path: 'login',
        loadChildren: () => import('./forms/login/login.module').then(m => m.LoginModule)
      },
      // @public --> pages --> RegisterUser
      {
        path: 'register',
        loadChildren: () => import('./forms/register/register.module').then(m => m.RegisterModule)
      },
      // @public --> pages --> RecuperarPassword
      {
        path: 'forgot',
        loadChildren: () => import('./forms/forgot/forgot.module').then(m => m.ForgotModule)
      },
      // @public --> pages --> ActiveUser
      {
        path: 'active/:token',
        loadChildren: () => import('./forms/active/active.module').then(m => m.ActiveModule)
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PublicRoutingModule { }
