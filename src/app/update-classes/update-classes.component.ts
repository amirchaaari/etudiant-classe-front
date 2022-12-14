import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Classe } from '../model/class.model';

@Component({
  selector: 'app-update-classes',
  templateUrl: './update-classes.component.html',
  styles: [
  ]
})
export class UpdateClassesComponent implements OnInit {
  @Input()
classe! : Classe;
@Input()
ajout!:boolean;

@Output() 
classeUpdated = new EventEmitter<Classe>();
  constructor() { }

  ngOnInit(): void {
    console.log("ngOnInit du composant UpdateCategorie ",this.classe);

  }


  saveClasse(){this.classeUpdated.emit(this.classe);
  }

 
}
