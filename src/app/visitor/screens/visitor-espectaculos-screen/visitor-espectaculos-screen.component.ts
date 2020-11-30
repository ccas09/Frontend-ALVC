import { Component, OnInit } from '@angular/core';
import { NewsService } from 'src/app/services/news.service'
import { iNews } from 'src/app/models/news.model'

@Component({
  selector: 'app-visitor-espectaculos-screen',
  templateUrl: './visitor-espectaculos-screen.component.html',
  styleUrls: ['./visitor-espectaculos-screen.component.less']
})
export class VisitorEspectaculosScreenComponent implements OnInit {

   
  public inews: iNews[];
  public espectaculos: string = 'Espectaculos';
  public page: number = 1;


  constructor(private newsService: NewsService){
  }

  ngOnInit(): void {
    this.inews = this.newsService.getNewsByCategory(this.espectaculos);
  }



}

