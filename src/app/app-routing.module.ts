import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddEtudiantComponent } from './add-etudiant/add-etudiant.component';
import { EtudiantsComponent } from './etudiants/etudiants.component';
import { ListeClasseComponent } from './liste-classe/liste-classe.component';
import { LoginComponent } from './login/login.component';
import { RechercheParClasseComponent } from './recherche-par-classe/recherche-par-classe.component';
import { RegisterComponent } from './register/register.component';
import { UpdateEtudiantComponent } from './update-etudiant/update-etudiant.component';

const routes: Routes = [
  {path: "updateEtudiant/:id", component: UpdateEtudiantComponent},

  {path: "etudiants", component : EtudiantsComponent},
  {path: "add-etudiant", component : AddEtudiantComponent},
  { path: "", redirectTo: "etudiants", pathMatch: "full" },
  {path: "rechercheparclasse", component : RechercheParClasseComponent},
  {path: "register", component : RegisterComponent},
  {path: "login", component : LoginComponent},
  {path: "listeclasses", component : ListeClasseComponent},




];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
