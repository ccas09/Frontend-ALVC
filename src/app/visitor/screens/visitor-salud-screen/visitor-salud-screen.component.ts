import { Component, OnInit } from '@angular/core';
import { NewsService } from 'src/app/services/news.service'
import { iNews } from 'src/app/models/news.model'

@Component({
  selector: 'app-visitor-salud-screen',
  templateUrl: './visitor-salud-screen.component.html',
  styleUrls: ['./visitor-salud-screen.component.less']
})
export class VisitorSaludScreenComponent implements OnInit {

  public inews: iNews[];
  public salud: string = 'Salud';
  public page: number = 1;

  constructor(private newsService: NewsService){
  }
  ngOnInit(): void {
    this.inews = this.newsService.getNewsByCategory(this.salud);
  }

}
