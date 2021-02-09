import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MaterialModule } from './material';
import { SetupRacketComponent } from './setup-racket/setup-racket.component';
import { AboutGuideComponent } from './about-guide/about-guide.component';

@NgModule({
  declarations: [
    AppComponent,
    SetupRacketComponent,
    AboutGuideComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
