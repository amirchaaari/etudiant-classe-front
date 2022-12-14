import { Component, OnInit } from '@angular/core';
import { Etudiant } from '../model/etudiant.model';
import { AuthService } from '../services/auth.service';
import { EtudiantService } from '../services/etudiant.service';

@Component({
  selector: 'app-etudiants',
  templateUrl: './etudiants.component.html',
  styleUrls: ['./etudiants.component.css']
})
export class EtudiantsComponent implements OnInit {
  etudiants?:Etudiant[];
  constructor(private etudiantService: EtudiantService,public authService: AuthService) { 
   
  }

  ngOnInit(): void {
    this.chargerEtudiants();
   
  }
//   supprimerEtudiant(e: Etudiant)
// {
//   //console.log(e);

//   let conf = confirm("Etes-vous sûr ?");
// if (conf)
//   this.etudiantService.supprimerEtudiants(e);  
// }

chargerEtudiants(){
   // this.etudiants =this.etudiantService.listeEtudiants();
   this.etudiantService.listeEtudiants().subscribe(etuds => {
    console.log(etuds);
    this.etudiants = etuds;
    });
  }
  


supprimerEtudiant(e: Etudiant)
{
let conf = confirm("Etes-vous sûr ?");
if (conf)
this.etudiantService.supprimerEtudiant(e.idEtudiant).subscribe(() => {
console.log("produit supprimé");
this.chargerEtudiants();
});
} 


}
