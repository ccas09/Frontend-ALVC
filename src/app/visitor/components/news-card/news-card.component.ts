import { Component,Input ,OnInit } from '@angular/core';
import { iNews } from 'src/app/models/news.model'; 


@Component({
  selector: 'visitor-news-card',
  templateUrl: './news-card.component.html',
  styleUrls: ['./news-card.component.less']
})
export class NewsCardComponent implements OnInit {

  @Input()
  public news: iNews;

  constructor() { 
    
  }

  ngOnInit(): void {
  }
}
