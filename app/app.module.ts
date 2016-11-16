import { BrowserModule } from '@angular/platform-browser';
import { NgModule }      from '@angular/core';
import { RouterModule }   from '@angular/router';

import { AppRoutingModule }     from './app-routing.module';

import { AppComponent }   from './app.component';

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


@NgModule({
  imports: [ 
  	BrowserModule,
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
  
  bootstrap: [ 
  	AppComponent 
  ]
})
export class AppModule { }