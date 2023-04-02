import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';

import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { AppRoutingModule, routingComponent } from './app-routing.module';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon'
import {MatListModule} from '@angular/material/list'




import { AppComponent } from './app.component';
import { NavbarComponent } from './componentes/navbar/navbar.component';
import { SectionSobreMiComponent } from './componentes/section-sobre-mi/section-sobre-mi.component';
import { SectionProyectosComponent } from './componentes/section-proyectos/section-proyectos.component';
import { SectionContactoComponent } from './componentes/section-contacto/section-contacto.component';
import { FooterComponent } from './componentes/footer/footer.component';
import { ExperienciaComponent } from './componentes/experiencia/experiencia.component';
import { EducacionComponent } from './componentes/educacion/educacion.component';
import { LoginComponent } from './componentes/login/login.component';
import { HardSoftSkillsComponent } from './componentes/hard-soft-skills/hard-soft-skills.component';
import { AddExperienciaComponent } from './componentes/add-experiencia/add-experiencia.component';

import { AddEducacionComponent } from './componentes/add-educacion/add-educacion.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';









@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SectionSobreMiComponent,
    SectionProyectosComponent,
    SectionContactoComponent,
    FooterComponent,
    ExperienciaComponent,
    EducacionComponent,
    LoginComponent,
    HardSoftSkillsComponent,
    AddExperienciaComponent,
    AddEducacionComponent,
    routingComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatIconModule,
    MatListModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
