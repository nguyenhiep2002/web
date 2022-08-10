import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(all3: any[], keyword: string): any[] {
    if (keyword) {
      keyword = keyword.toLowerCase()
      if (keyword == '') return all3;
      return all3.filter(data => {
        return data.name.toLowerCase().includes(keyword);
      });
    } else {
      return all3;
    }

  }

}
