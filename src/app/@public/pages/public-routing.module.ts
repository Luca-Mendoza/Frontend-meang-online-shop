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
        loadChildren: () =>
          import('./home/home.module').then((m) => m.HomeModule),
      },
      // @public --> pages --> games -->  Pagina de Items con su información
      {
        path: 'games/details/:id',
        loadChildren: () =>
          import('./games/details/details.module').then((m) => m.DetailsModule),
      },
      // @public --> pages --> gamas --> tipo y filtrado de plataforma
      {
        path: 'games/:type/:filter',
        loadChildren: () =>
          import('./games/games.module').then((m) => m.GamesModule),
      },
      // @public --> pages --> contact
      {
        path: 'contact',
        loadChildren: () =>
          import('./contact/contact.module').then((m) => m.ContactModule),
      },
      // @public --> pages --> LogearUser
      {
        path: 'login',
        loadChildren: () =>
          import('./forms/login/login.module').then((m) => m.LoginModule),
      },
      // @public --> pages --> RegisterUser
      {
        path: 'register',
        loadChildren: () =>
          import('./forms/register/register.module').then(
            (m) => m.RegisterModule
          ),
      },
      // @public --> pages --> RecuperarPassword
      {
        path: 'forgot',
        loadChildren: () =>
          import('./forms/forgot/forgot.module').then((m) => m.ForgotModule),
      },
      // @public --> pages --> ResPassword
      {
        path: 'reset/:token',
        loadChildren: () =>
          import('./forms/change-password/change-password.module').then(
            (m) => m.ChangePasswordModule
          ),
      },
      // @public --> pages --> ActiveUser
      {
        path: 'active/:token',
        loadChildren: () =>
          import('./forms/active/active.module').then((m) => m.ActiveModule),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PublicRoutingModule {}
