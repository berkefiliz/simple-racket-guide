import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AboutGuideComponent } from './courses/about-guide/about-guide.component';
import { SetupRacketComponent } from './courses/setup-racket/setup-racket.component';

const routes: Routes = [
  { path: 'about-the-guide', component: AboutGuideComponent},
  { path: 'setup-racket', component: SetupRacketComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
