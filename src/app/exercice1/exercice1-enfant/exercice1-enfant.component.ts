import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-exercice1-enfant',
  templateUrl: './exercice1-enfant.component.html',
  styleUrls: ['./exercice1-enfant.component.css']
})
export class Exercice1EnfantComponent implements OnInit {

  @Input() compteur;
  @Output() action = new EventEmitter();

  constructor() { }

  public modifCompteur(value) {
    this.action.emit(value);
  }


  ngOnInit() {
  }

}
