import { Component, OnInit } from '@angular/core';
import { Classe } from '../model/class.model';
import { EtudiantService } from '../services/etudiant.service';

@Component({
  selector: 'app-liste-classe',
  templateUrl: './liste-classe.component.html',
  styles: [
  ]
})
export class ListeClasseComponent implements OnInit {
  ajout:boolean=true;
classes! : Classe[];
updatedClasse:Classe = {"idClasse":0,"nomClasse":"","departement":""};


  constructor(private etudiantservice:EtudiantService ) { }

  ngOnInit(): void {


    this.etudiantservice.listeClasse().
subscribe(cats => {this.classes =cats;
console.log(cats);

});
    
  }


  classeUpdated(cat:Classe){
    console.log("Cat updated event",cat);
    this.etudiantservice.ajouterClasse(cat).
     subscribe( ()=> this.chargerCategories());
    }
    chargerCategories(){
      this.etudiantservice.listeClasse().
      subscribe(cats => {this.classes =cats;
      console.log(cats);
      
      });
          
   



      }
      
 updateClasse(cat:Classe) {
this.updatedClasse=cat;
this.ajout=false;     }
    



}
