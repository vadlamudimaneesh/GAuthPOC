import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GAuthComponent } from './gauth/gauth.component';
import { HomepageComponent } from './homepage/homepage.component';

const routes: Routes = [
  { path: '', component:HomepageComponent},
  { path: 'g-auth', component:GAuthComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
