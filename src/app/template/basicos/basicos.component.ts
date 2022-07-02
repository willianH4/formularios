import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styles: [
  ]
})
export class BasicosComponent implements OnInit {

  //TODO: establecer valores por defecto en el formulario
  initForm = {
    producto: '',
    precio: 10,
    existencias: 10
  }

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
    console.log("Guardado correctamente")
    //TODO: metodo para limpiar el formulario despues del envio de la info
    this.formulario.resetForm({
      producto: 'Sin nombre',
      precio: 0,
      existencia: 0
    });
  }

}
