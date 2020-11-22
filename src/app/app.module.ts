import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IndependentHouseDetailsComponent } from './independent-house-details/independent-house-details.component';
import { ApartmemtDetailsComponent } from './apartmemt-details/apartmemt-details.component';
import { HomeComponent } from './home/home.component';
import {YouTubePlayerModule} from '@angular/youtube-player';

@NgModule({
  declarations: [
    AppComponent,
    IndependentHouseDetailsComponent,
    ApartmemtDetailsComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    YouTubePlayerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
