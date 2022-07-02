import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

interface Persona {
  nombre: string,
  favoritos: Favorito[]
}

interface Favorito {
  id: number,
  nombre: string
}

@Component({
  selector: 'app-dinamicos',
  templateUrl: './dinamicos.component.html',
  styles: [
  ]
})

export class DinamicosComponent implements OnInit {

  persona: Persona = {
    nombre: 'Willian',
    favoritos: [
      { id:1, nombre: 'Metal Slug' },
      { id:2, nombre: 'Fifa 21' },
    ]
  }

  nuevoJuego: string = "";

  constructor() { }

  ngOnInit(): void {
  }

  guardar() {
    console.log("Formulario guardado")
  }

  agregar() {
    console.log(this.nuevoJuego);
    const nuevoFavorito: Favorito = {
      id: this.persona.favoritos.length + 1,
      nombre: this.nuevoJuego
    }
    this.persona.favoritos.push( {...nuevoFavorito} ); //TODO: spread operator para no mandar referencias al objeto original
    this.nuevoJuego = "";
  }

  eliminar( i: number ) {
    this.persona.favoritos.splice(i, 1);
  }

}
