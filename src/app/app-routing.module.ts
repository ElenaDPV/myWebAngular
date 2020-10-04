import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { ExperienciaComponent } from './experiencia/experiencia.component';
import { ConocimientosComponent } from './conocimientos/conocimientos.component';

import { TrayectoriaComponent } from './trayectoria/trayectoria.component';
import { FreelanceComponent } from './freelance/freelance.component';
import { CookiesComponent } from './cookies/cookies.component';


const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'experiencia', component: ExperienciaComponent},
  {path: 'conocimientos', component: ConocimientosComponent},
  {path: 'trayectoria', component: TrayectoriaComponent},
  {path: 'freelance', component: FreelanceComponent},
  {path: 'cookies', component: CookiesComponent},
  { path: '', redirectTo: '/home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
