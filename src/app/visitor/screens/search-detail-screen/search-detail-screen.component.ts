import { Component, OnInit } from '@angular/core';
import { iNews } from '../../../../app/models/news.model';
import { NewsService } from '../../../../app/services/news.service';

@Component({
  selector: 'app-search-detail-screen',
  templateUrl: './search-detail-screen.component.html',
  styleUrls: ['./search-detail-screen.component.less']
})
export class SearchDetailScreenComponent implements OnInit {

  public inews: iNews[];
  
  public filterSearch: string = '';
  public textSearch: string = '';
  public page: number = 1;


  constructor(private newsService: NewsService){
  }

  ngOnInit(): void {
    this.inews = this.newsService.getAllNews();
  }

}

