import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AboutGuideComponent } from './courses/about-guide/about-guide.component';
import { SetupRacketComponent } from './courses/setup-racket/setup-racket.component';
import { WelcomePageComponent } from './welcome-page/welcome-page.component';

import { C1VariablesComponent } from './courses/c1-variables/c1-variables.component';

import { Quiz1Component } from './exercises/quiz1/quiz1.component';

const routes: Routes = [
  { path: '', component: WelcomePageComponent },
  { path: 'about-the-guide', component: AboutGuideComponent },
  { path: 'setup-racket', component: SetupRacketComponent },

  { path: 'variable-types', component: C1VariablesComponent },

  { path: 'exercise1', component: Quiz1Component },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { anchorScrolling: 'enabled' })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
