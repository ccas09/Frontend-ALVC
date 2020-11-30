import { Component, OnInit } from '@angular/core';
import { iNews } from 'src/app/models/news.model';
import { NewsService } from 'src/app/services/news.service'

@Component({
  selector: 'app-visitor-noticias-screen',
  templateUrl: './visitor-noticias-screen.component.html',
  styleUrls: ['./visitor-noticias-screen.component.less']
})
export class VisitorNoticiasScreenComponent implements OnInit {

  public inews: iNews[];
  public nacional: string = 'Nacional';
  public page: number = 1;

  constructor(private newsService: NewsService){
  }


  ngOnInit(): void {
    this.inews = this.newsService.getNewsByCategory(this.nacional);
  }

}
