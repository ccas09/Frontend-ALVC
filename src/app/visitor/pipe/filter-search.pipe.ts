import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterSearchPipe implements PipeTransform {


  transform(value: any, arg: any): any {
    if(arg === '' || arg.length < 2) return value;
    const resultSearch = [];
    for(const inews of value){
      if(inews.titleCard.toLowerCase().indexOf(arg.toLowerCase()) > -1){
        resultSearch.push(inews);
      }
    }
    return resultSearch;
  }

}
