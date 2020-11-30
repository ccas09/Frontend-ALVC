import { Injectable } from '@angular/core';
import { iNews } from '../../models/news.model';
import { NEWS } from '../NEWS.const';

@Injectable({
  providedIn: 'root'
})
export class NewsService {
  private inews: iNews[];
  private newsPivot: iNews;
  private categoryArray: iNews[];

  constructor() {
    this.inews = NEWS;
   
   }
   // ------ GET ------- \\
   public getCategory(category: string){
    return this.inews.find((news: iNews) => news.category == category);
   }

   public getAllNews(){
     return this.inews;
   }
   // ------ *** -------- \\

   public getNewsById(id: number): iNews {
     return this.inews.find((news: iNews) => news._id == id);
   }
   
   public getNewsByViews(views: number): number{
    this.newsPivot= this.inews.find((news: iNews) => news.views == views);
    return this.newsPivot.views;
  }

   //--------------------- CATEGORIA --------------------------\\
   public getNewsByCategory(category: string) {
      return this.inews.filter((inew: iNews) => inew.category === category);
   }

   //--------------------- ********* --------------------------\\

} // FIN
