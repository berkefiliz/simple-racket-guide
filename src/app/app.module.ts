import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MaterialModule } from './material';

import { AboutGuideComponent } from './courses/about-guide/about-guide.component';
import { SetupRacketComponent } from './courses/setup-racket/setup-racket.component';
import { WelcomePageComponent } from './welcome-page/welcome-page.component';
import { Quiz1Component } from './exercises/quiz1/quiz1.component';
import { C1VariablesComponent } from './courses/c1-variables/c1-variables.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutGuideComponent,
    SetupRacketComponent,
    WelcomePageComponent,
    Quiz1Component,
    C1VariablesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
