import { Component, OnInit } from '@angular/core';
import { NewsService } from 'src/app/services/news.service'
import { iNews } from 'src/app/models/news.model'

@Component({
  selector: 'app-visitor-cultural-screen',
  templateUrl: './visitor-cultural-screen.component.html',
  styleUrls: ['./visitor-cultural-screen.component.less']
})
export class VisitorCulturalScreenComponent implements OnInit {


  public inews: iNews[];
  public culturales: string = 'Culturales';
  public page: number = 1;

  constructor(private newsService: NewsService){
  }

  ngOnInit(): void {
    this.inews = this.newsService.getNewsByCategory(this.culturales);
  }

}

