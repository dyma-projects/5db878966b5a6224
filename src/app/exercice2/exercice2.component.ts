import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-exercice2',
  templateUrl: './exercice2.component.html',
  styleUrls: ['./exercice2.component.css']
})
export class Exercice2Component implements OnInit {
  public valeur: string;

  @ViewChild('f') public el: ElementRef;

  constructor() { }

  ngOnInit() {
  }

  public editText() {
    this.valeur = this.el.nativeElement.value;
    console.log('mon element ref : ', this.el.nativeElement.value);
  }

}
