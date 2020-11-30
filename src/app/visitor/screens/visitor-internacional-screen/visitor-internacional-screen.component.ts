import { Component, OnInit } from '@angular/core';
import { NewsService } from 'src/app/services/news.service'
import { iNews } from 'src/app/models/news.model'

@Component({
  selector: 'app-visitor-internacional-screen',
  templateUrl: './visitor-internacional-screen.component.html',
  styleUrls: ['./visitor-internacional-screen.component.less']
})
export class VisitorInternacionalScreenComponent implements OnInit {

  public inews: iNews[];
  public internacional: string = 'Internacional';
  public page: number = 1;

  constructor(private newsService: NewsService){
  }

  ngOnInit(): void {
    this.inews = this.newsService.getNewsByCategory(this.internacional);
  }

}
