import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styles: [
  ]
})

export class BasicosComponent implements OnInit {

  // TODO: Se comento debido a que se implementara formBuilder para el manejo de los inputs
  // formulario: FormGroup = new FormGroup({
  //   nombre        : new FormControl('RTX 4080 ti'),
  //   precio        : new FormControl(1200),
  //   existencias   : new FormControl(5),
  // })

  formulario: FormGroup = this.fb.group({
    nombre: [, [Validators.required, Validators.minLength(3)] ],
    precio: [, [ Validators.required, Validators.min(0) ] ],
    existencias: [, [ Validators.required, Validators.min(0) ] ]
  })

  constructor(
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {
    this.formulario.reset({ //TODO: establece valores al formulario
      nombre: 'RTX 3919',
      precio: 1200,
      existencias: 100
    })
  }

  campoEsValido( campo: string ) {
    return this.formulario.controls[campo].errors && this.formulario.controls[campo].touched;
  }

  guardar() {
    if ( this.formulario.invalid ) {
      this.formulario.markAllAsTouched();
      return;
    }

    this.formulario.reset();
  }

}
