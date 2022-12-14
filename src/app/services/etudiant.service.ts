import { Injectable } from '@angular/core';
import { Classe } from '../model/class.model';
import { Etudiant } from '../model/etudiant.model';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
const httpOptions = {
  headers: new HttpHeaders( {'Content-Type': 'application/json'} )
};
@Injectable({
providedIn: 'root'
})
export class EtudiantService {
    apiURL: string = 'http://localhost:8082/etudiants/api';
    apiURLClasse: string = 'http://localhost:8082/etudiants/api/classe';

  etudiant! : Etudiant;
  classes!:Classe[];

etudiants! : Etudiant[]; //un tableau de Produit
constructor(private http : HttpClient) { 
//   this.classes = [ {idClasse : 1, nomClasse : "dsi21",departement:"TI"},
// {idClasse : 2, nomClasse : "dsi24",departement:"TI"}];
//   this.etudiants = [
//   {idEtudiant : 1, nomEtudiant : "ahmed", prenomEtudiant : "chaari",cin:"1430070", dateNaissance
//  : new Date("01/14/2011"),classe:{idClasse : 1, nomClasse : "dsi21",departement:"TI"}},
//  {idEtudiant : 2, nomEtudiant : "amir", prenomEtudiant : "chaari",cin:"1430070", dateNaissance
//  : new Date("01/14/2011"),classe:{idClasse : 2, nomClasse : "dsi24",departement:"TI"}}
  
 
//    ];
}
listeEtudiants(): Observable<Etudiant[]> {
  return this.http.get<Etudiant[]>(this.apiURL);
}
ajouterEtudiant( etud: Etudiant):Observable<Etudiant>{
  return this.http.post<Etudiant>(this.apiURL, etud, httpOptions);
  }
  
// supprimerEtudiants( etud: Etudiant){
//   //supprimer le produit prod du tableau produits
//   const index = this.etudiants.indexOf(etud, 0);
//   if (index > -1) {
//   this.etudiants.splice(index, 1);
//   }
//   //ou Bien
//   /* this.produits.forEach((cur, index) => {
//   if(prod.idProduit === cur.idProduit) {
//   this.produits.splice(index, 1);
//   }
//   }); */
//   }


supprimerEtudiant(id : number) {
  const url = `${this.apiURL}/${id}`;
  return this.http.delete(url, httpOptions);
  }


  consulterEtudiant(id:number): Observable<Etudiant> {
    const url = `${this.apiURL}/${id}`;
    return this.http.get<Etudiant>(url);
    }
    updateEtudiant(e:Etudiant): Observable<Etudiant>
    {
      return this.http.put<Etudiant>(this.apiURL, e, httpOptions);


    }  
    trierEtudiants(){
      this.etudiants = this.etudiants.sort((n1,n2) => {
      if (n1.idEtudiant! > n2.idEtudiant!) {
      return 1;
      }
      if (n1.idEtudiant! < n2.idEtudiant!) {
      return -1;
      }
      return 0;
      });
      }
      listeClasse():Observable<Classe[]>{
        return this.http.get<Classe[]>(this.apiURL+"/classe");
        }
        
      //   consulterClasse(id:number): Classe{ 
      //     return this.classes.find(cat => cat.idClasse == id)!;
      //     }



      rechercherParClasse(idCat: number):Observable< Etudiant[]> {
        const url = `${this.apiURL}/etudclasse/${idCat}`;
        return this.http.get<Etudiant[]>(url);
        }




        ajouterClasse( cat: Classe):Observable<Classe>{
          return this.http.post<Classe>(this.apiURLClasse, cat, httpOptions);
          }
}
