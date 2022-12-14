import { Classe } from "./class.model";

export class Etudiant {
    idEtudiant! : number;
    nom! : string;
    prenom! : string;
    cin!: String;
    dateNaissance! : Date ;
    classe!: Classe;
    }