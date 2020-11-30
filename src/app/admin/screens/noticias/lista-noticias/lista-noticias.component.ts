import { Component, OnInit } from '@angular/core';
import { iNews } from 'src/app/models/news.model';
import { NEWS } from '../../../../services/NEWS.const'

@Component({
  selector: 'app-lista-noticias',
  templateUrl: './lista-noticias.component.html',
  styleUrls: ['./lista-noticias.component.less'],
})
export class ListaNoticiasComponent implements OnInit {
  displayedColumns: string[] = ['titleCard', 'date', 'category', 'journalist', 'actions'];
  dataSource: iNews[] = NEWS
  constructor() {}

  ngOnInit(): void {}
}
