import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { ExperienciaComponent } from './experiencia/experiencia.component';
import { ConocimientosComponent } from './conocimientos/conocimientos.component';
import { FreelanceComponent } from './freelance/freelance.component';
import { TrayectoriaComponent } from './trayectoria/trayectoria.component';


const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'experiencia', component: ExperienciaComponent},
  {path: 'conocimiento', component: ConocimientosComponent},
  {path: 'trayectoria', component: FreelanceComponent},
  {path: 'freelace', component: TrayectoriaComponent},
  { path: '', redirectTo: '/home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
