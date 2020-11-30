import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { iNews } from 'src/app/models/news.model';
import { NEWS } from 'src/app/services/NEWS.const';

@Component({
  selector: 'app-editar-noticia',
  templateUrl: './editar-noticia.component.html',
  styleUrls: ['./editar-noticia.component.less'],
})
export class EditarNoticiaComponent implements OnInit {
  constructor(private route: ActivatedRoute) {}
  public noticiaInicial: iNews
  ngOnInit(): void {
    const idNoticia = parseInt(this.route.snapshot.paramMap.get('idNoticia'));

    const noticiaInicial = NEWS.find((noticia) => noticia._id == idNoticia); // sacar del backend
    this.noticiaInicial = noticiaInicial
    console.log('inicial en editar-noticia:', noticiaInicial, '(falta pasarselo al form)');
    /* TODO:
      1. Adaptar form-noticias para recibir un Input "valorInicial" de noticia que rellene el formulario this.fb. = valoresIniciales
      2. en editar-noticia pasarle este valorInicial a form-noticias
    */
  }

  editarNoticia(noticia) {
    const idNoticia = this.route.snapshot.paramMap.get('idNoticia');
    console.log('id a editar', idNoticia);
    console.log('nuevos valores ', noticia);
  }
}
