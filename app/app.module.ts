import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule} from '@angular/forms'

import { AppComponent }  from './app.component';
import { LocationDetailComponent } from './location-detail/location-detail.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';

import { routing } from './app.routing';

@NgModule({
  imports:      [ BrowserModule, FormsModule, routing ],
  declarations: [ AppComponent, LoginComponent, HomeComponent, LocationDetailComponent],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }

