import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'bookfilter'
})
export class BookfilterPipe implements PipeTransform {

  transform(items: any[], searchText: string): any[] {
    if (!items) {return []; }
    if (!searchText) { return items; }
    searchText = searchText.toLowerCase();
    return items.filter(it => {
      return ((it.bookName.toLowerCase().includes(searchText))
      || (it.examType.toLowerCase().includes(searchText))
      || (it.subject.toLowerCase().includes(searchText))
      || (it.mediumType.toLowerCase().includes(searchText))
      || (it.itemType.toLowerCase().includes(searchText))
      || (it.price.toString().includes(searchText)));
    });
  }
}
