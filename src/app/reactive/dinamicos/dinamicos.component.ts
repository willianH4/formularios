import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-dinamicos',
  templateUrl: './dinamicos.component.html',
  styles: [
  ]
})
export class DinamicosComponent implements OnInit {

  get favoritosArr() {
    return this.formulario.get('favoritos') as FormArray;
  }

  formulario: FormGroup = this.fb.group({
    nombrePersona: [, [Validators.required, Validators.minLength(3)] ],
    favoritos: this.fb.array( [
      ['Metal Slug', Validators.required ],
      [ 'Pokemon', Validators.required ],
    ], Validators.required )
  })

  nuevoFavorito: FormControl = this.fb.control('', Validators.required);

  constructor(
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {
  }

  verificaVacio(campo: string) {
    return this.formulario.controls[campo].errors && this.formulario.controls[campo].touched;
  }

  agregarFavorito() {
    if ( this.nuevoFavorito.invalid ) {
      return
    }

    //TODO: forma 1
    // this.favoritosArr.push( new FormControl( this.nuevoFavorito.value, Validators.required ) );

    //TODO: usando formBuilder
    this.favoritosArr.push( this.fb.control( this.nuevoFavorito.value, Validators.required ) );

    this.nuevoFavorito.reset();
  }

  guardar() {
    if ( this.formulario.invalid ) {
      this.formulario.markAllAsTouched();
      return;
    }
    console.log(this.formulario.value);
  }

  borrar( i: number ) {
    this.favoritosArr.removeAt(i);
  }

}
