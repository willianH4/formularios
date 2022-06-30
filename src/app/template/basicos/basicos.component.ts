import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styles: [
  ]
})
export class BasicosComponent implements OnInit {

  // TODO: Decorador viewchild para leer referencias de la vista o html
  @ViewChild('formulario') formulario!: NgForm;

  constructor() { }

  ngOnInit(): void {
  }

  nombreValido(): boolean {
    return this.formulario?.controls['producto']?.invalid && this.formulario?.controls['producto']?.touched
  }

  numeroValido(): boolean {
    return this.formulario?.controls['precio']?.touched && this.formulario?.controls['precio']?.value < 0;
  }

  // save( formulario: NgForm ) {
  save() {
    console.log( this.formulario )
  }

}
