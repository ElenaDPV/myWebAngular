import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ConocimientosComponent } from './conocimientos/conocimientos.component';
import { TrayectoriaComponent } from './trayectoria/trayectoria.component';
import { ExperienciaComponent } from './experiencia/experiencia.component';
import { FreelanceComponent } from './freelance/freelance.component';
import { FooterComponent } from './footer/footer.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CookiesComponent } from './cookies/cookies.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ResumeComponent } from './resume/resume.component';
import { CodeComponent } from './code/code.component';

@NgModule({
  declarations: [
    AppComponent,
    
    HomeComponent,
    ConocimientosComponent,
    TrayectoriaComponent,
    ExperienciaComponent,
    FreelanceComponent,
    FooterComponent,
    NavbarComponent,
    CookiesComponent,
    LoginComponent,
    RegisterComponent,
    ResumeComponent,
    CodeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
