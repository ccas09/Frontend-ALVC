import { Component, OnInit } from '@angular/core';
import { NewsService } from 'src/app/services/news.service'
import { iNews } from 'src/app/models/news.model'


@Component({
  selector: 'app-periodistas-modificar-screen',
  templateUrl: './periodistas-modificar-screen.component.html',
  styleUrls: ['./periodistas-modificar-screen.component.less']
})
export class PeriodistasModificarScreenComponent implements OnInit {


  public inews: iNews[];
  public home: string = 'eliminar';
  public contador = 0;
  public page: number = 1;
  //public newsNuevas: iNews[];
  constructor(private newsService: NewsService){
  }

  ngOnInit(): void {
    this.inews = this.newsService.getAllNews();
    this.inews.sort(function (a, b) {
      if (a.views > b.views) {
        
        return -1;
      }
      if (a.views < b.views) {
        
        return 1;
      }
      // a must be equal to b 
    
      return 0;
    });

    
  }
  
  
}