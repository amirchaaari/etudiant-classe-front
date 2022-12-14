import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Classe } from '../model/class.model';
import { Etudiant } from '../model/etudiant.model';
import { EtudiantService } from '../services/etudiant.service';

@Component({
  selector: 'app-update-etudiant',
  templateUrl: './update-etudiant.component.html',
  styles: [
  ]
})
export class UpdateEtudiantComponent implements OnInit {
  currentEtudiant = new Etudiant();
  classes! : Classe[];
updatedClasseId! : number;


  constructor(private activatedRoute: ActivatedRoute,
    private etudiantService: EtudiantService,private router :Router,
    ) { }

  ngOnInit(): void {
    // console.log(this.activatedRoute.snapshot.params['id']);
    // this.classes = this.etudiantService.listeClasse();

    // this.etudiantService.consulterEtudiant(this.activatedRoute.snapshot.params['id']).
    // subscribe( prod =>{ this.currentEtudiant = prod; } ) ;
    this.etudiantService.listeClasse().
subscribe(cats => {this.classes = cats;
console.log(cats);
});
this.etudiantService.consulterEtudiant(this.activatedRoute.snapshot.params['id']).
subscribe( prod =>{ this.currentEtudiant = prod; 
this.updatedClasseId = 
this.currentEtudiant.classe.idClasse;
} ) ;


     }


  updateEtudiant()
{ 
// this.currentEtudiant.classe=this.etudiantService.consulterClasse(this.updatedClasseId);

  //console.log(this.currentEtudiant);
// this.etudiantService.updateProduit(this.currentEtudiant);

// this.etudiantService.updateEtudiant(this.currentEtudiant).subscribe(etud => {
//   this.router.navigate(['etudiants']); }
//   );
this.currentEtudiant.classe = this.classes.
 find(cat => cat.idClasse == this.updatedClasseId)!;
this.etudiantService.updateEtudiant(this.currentEtudiant).subscribe(prod => {
this.router.navigate(['etudiants']); }
);

}

}
