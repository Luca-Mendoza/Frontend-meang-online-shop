
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  // @public --> pages --> Home
  {
    path: 'home',
    loadChildren: () => import('./@public/pages/home/home.module').then(m => m.HomeModule)
  },
  // @public --> pages --> contact
  {
    path: 'contact',
    loadChildren: () => import('./@public/pages/contact/contact.module').then(m => m.ContactModule)
  },
  // @Rutas vacias y rutas comodín
  {
    path: 'admin',
    loadChildren: () => import('./@admin/pages/dashboard/dashboard.module').then(m => m.DashboardModule)
  },
  {
    path: 'users',
    loadChildren: () => import('./@admin/pages/users/users.module').then(m => m.UsersModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: ' home',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes,
    {
      useHash: true,
      scrollPositionRestoration: 'enabled'
    })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
