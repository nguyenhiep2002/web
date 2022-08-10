import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(all: any[], keyword: string): any[] {
    if (keyword) {
      keyword = keyword.toLowerCase()
      if (keyword == '') return all;
      return all.filter(data => {
        return data.name.toLowerCase().includes(keyword);
      });
    } else {
      return all;
    }

}
}
