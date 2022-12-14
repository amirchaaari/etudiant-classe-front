import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Classe } from '../model/class.model';
import { Etudiant } from '../model/etudiant.model';
import { EtudiantService } from '../services/etudiant.service';

@Component({
  selector: 'app-add-etudiant',
  templateUrl: './add-etudiant.component.html',
  styleUrls: ['./add-etudiant.component.css']
})
export class AddEtudiantComponent implements OnInit {
  newEtudiant = new Etudiant();
   message!:String;
   classes!:Classe[];
   newIdClasse! : number;
newClasse! : Classe;


  constructor(private etudiantService: EtudiantService,private router :Router) { }
  
  addEtudiant(){
//     this.etudiantService.ajouterEtudiant(this.newEtudiant).subscribe(etud => {
// console.log(etud);
// this.router.navigate(['etudiants']);
// });



this.newEtudiant.classe = this.classes.find(cat => cat.idClasse == this.newIdClasse)!;
this.etudiantService.ajouterEtudiant(this.newEtudiant)
.subscribe(etud => {
console.log(etud);
this.router.navigate(['etudiants']);
});
      

  }

  ngOnInit(): void {
    this.etudiantService.listeClasse().
    subscribe(cats => {this.classes = cats;
    console.log(cats);
    });
    
  }

}
