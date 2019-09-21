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
      return ((it.firstName.toLowerCase().includes(searchText))
      || (it.lastName.toLowerCase().includes(searchText))
      || (it.email.toLowerCase().includes(searchText)));
    });
  }
}
