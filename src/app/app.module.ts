import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EtudiantsComponent } from './etudiants/etudiants.component';
import { AddEtudiantComponent } from './add-etudiant/add-etudiant.component';
import { FormsModule } from '@angular/forms';
import { UpdateEtudiantComponent } from './update-etudiant/update-etudiant.component';
import { HttpClientModule } from '@angular/common/http';
import { RechercheParClasseComponent } from './recherche-par-classe/recherche-par-classe.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ListeClasseComponent } from './liste-classe/liste-classe.component';
import { UpdateClassesComponent } from './update-classes/update-classes.component';


@NgModule({
  declarations: [
    AppComponent,
    EtudiantsComponent,
    AddEtudiantComponent,
    UpdateEtudiantComponent,
    RechercheParClasseComponent,
    LoginComponent,
    RegisterComponent,
    ListeClasseComponent,
    UpdateClassesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
