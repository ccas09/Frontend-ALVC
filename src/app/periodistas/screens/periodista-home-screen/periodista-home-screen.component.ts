import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
//import { resolvePtr } from 'dns';
import { backend } from '../../../axios';

interface Categorias {
  id_categoria: number;
  nombre_categoria: string;
}
@Component({
  selector: 'app-periodista-home-screen',
  templateUrl: './periodista-home-screen.component.html',
  styleUrls: ['./periodista-home-screen.component.less']
})
export class PeriodistaHomeScreenComponent implements OnInit {
  formularioAgregarNoticia: FormGroup;
  constructor(private fb: FormBuilder) {}
  categorias: Categorias[] =  [{
    id_categoria: 0,
    nombre_categoria: ''
  }];
  seleccionado: Categorias = {
    id_categoria: 0,
    nombre_categoria: ''
  };

  ngOnInit(): void {
    this.formularioAgregarNoticia = this.fb.group({
      titulo: ['', Validators.required],
      cuerpo: ['', Validators.required],
      categoria: ['', Validators.required]
    });

    backend.get('categorias')
      .then(resp => {
        // console.log(resp);
        this.categorias = resp.data;
      })
      .catch(error => {
        console.log(error);
      });
  }

  agregarNoticia(): void{
    const noticia = this.formularioAgregarNoticia.value;
    console.log(noticia);
    backend.post('noticias', noticia)
      .then(resp => {
        // TODO: Acción post agregar noticia
        console.log(resp);
      })
      .catch(error => {
        console.log(error);
      });
  }

}
