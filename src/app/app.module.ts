import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AdminModule } from './@admin/pages/admin.module';
import { PublicModule } from './@public/pages/public.module';

import { AppRoutingModule } from './app-routing.module';

import { GraphqlModule } from '@graphql/modules/graphql.module';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AdminModule,
    PublicModule,
    AppRoutingModule,
    GraphqlModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
