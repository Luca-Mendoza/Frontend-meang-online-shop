import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { AdminModule } from './@admin/pages/admin.module';
import { PublicModule } from './@public/pages/public.module';

import { AppRoutingModule } from './app-routing.module';




import { AppComponent } from './app.component';
import { MaterialModule } from './material.modules';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AdminModule,
    PublicModule,
    MaterialModule,
    BrowserAnimationsModule,
    AppRoutingModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
