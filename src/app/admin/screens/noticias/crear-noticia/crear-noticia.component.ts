import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-crear-noticia',
  templateUrl: './crear-noticia.component.html',
  styleUrls: ['./crear-noticia.component.less']
})
export class CrearNoticiaComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  crearNoticia(noticia) {
    console.log('Crear: ', noticia) // Llamar al backend
  }
}
