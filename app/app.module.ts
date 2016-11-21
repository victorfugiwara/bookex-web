import { BrowserModule } from '@angular/platform-browser';
import { NgModule }      from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { RouterModule }   from '@angular/router';

import { AppRoutingModule }     from './app-routing.module';

import { AppComponent }   from './app.component';

import { Config } from './util/config';
import { Header } from './util/header';
import { Metodos } from './util/metodos';

import { 
  RegisterComponent,
  LoginComponent,
  HomeComponent,
  ProfileComponent,
  EditProfileComponent,
  LibraryComponent,
  WishesComponent,
  CombinationsComponent
} from './components';

import {
  AuthService,
  LoginService,
  ProfileService
} from './services';


@NgModule({
  imports: [ 
  	BrowserModule,
    HttpModule,
    FormsModule,
    AppRoutingModule
  ],

  declarations: [ 
  	AppComponent,
    RegisterComponent,
    LoginComponent,
    HomeComponent,
    ProfileComponent,
    EditProfileComponent,
    LibraryComponent,
    WishesComponent,
    CombinationsComponent
  ],

  providers: [
    Config,
    Metodos,
    Header,
    AuthService,
    LoginService,
    ProfileService
  ],
  
  bootstrap: [ 
  	AppComponent 
  ]
})
export class AppModule { }