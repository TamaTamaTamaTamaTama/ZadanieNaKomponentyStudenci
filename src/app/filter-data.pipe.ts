import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterData',
  standalone: true
})
export class FilterDataPipe implements PipeTransform {

  transform(list: string[], ...args: string[]): any {
    const searchBy = args[0];
    if (!searchBy) { return list; }
    const filteredList = list.filter(el => {
        if (el.toLowerCase().includes(searchBy)) { return el; }
        else return null;
    });
    return filteredList;
  }

}
