import { Component, OnInit } from '@angular/core';
import { Classe } from '../model/class.model';
import { Etudiant } from '../model/etudiant.model';
import { EtudiantService } from '../services/etudiant.service';

@Component({
  selector: 'app-recherche-par-classe',
  templateUrl: './recherche-par-classe.component.html',
  styles: [
  ]
})
export class RechercheParClasseComponent implements OnInit {
etudiants! : Etudiant[];
IdClasse! : number;
classes! : Classe[]

  constructor(private etudiantservice:EtudiantService) { }

  ngOnInit(): void {


    this.etudiantservice.listeClasse().
subscribe(cats => {this.classes =cats;
console.log(cats);

});


  }

onChange(){
this.etudiantservice.rechercherParClasse(this.IdClasse).subscribe(e=>{this.etudiants=e});
console.log(this.etudiants);



}

}






