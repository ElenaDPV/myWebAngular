import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { ExperienciaComponent } from './experiencia/experiencia.component';
import { ConocimientosComponent } from './conocimientos/conocimientos.component';
import { ResumeComponent } from './resume/resume.component';
import { TrayectoriaComponent } from './trayectoria/trayectoria.component';
import { FreelanceComponent } from './freelance/freelance.component';
import { CookiesComponent } from './cookies/cookies.component';
import { LoginComponent } from './login/login.component';
import { CodeComponent } from './code/code.component';
import { RegisterComponent } from './register/register.component';


const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'experiencia', component: ExperienciaComponent},
  {path: 'conocimientos', component: ConocimientosComponent},
  {path: 'resume', component: ResumeComponent},
  {path: 'trayectoria', component: TrayectoriaComponent},
  {path: 'freelance', component: FreelanceComponent},
  {path: 'cookies', component: CookiesComponent},
  {path: 'code', component: CodeComponent},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  { path: 'descargar', redirectTo: '/Users/elenacasa/pruebas1/src/assets/pdf/presupuestoWeb.pdf'},
 
  { path: '', redirectTo: '/home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
