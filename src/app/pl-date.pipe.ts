import { DatePipe } from '@angular/common';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'plDate',
  standalone: true
})
export class PlDatePipe extends DatePipe implements PipeTransform {

  override transform(value: Date|string|number): string|null;
  override transform(value: null|undefined): null;
  override transform(value: Date|string|number|null|undefined): string|null{
    const datePl = super.transform(value, 'medium');
    const dateTab = datePl?.split(' ');
    let datePlForm = '';
    if(dateTab){
    switch (dateTab[1]) {
      case 'sty': dateTab[1] = 'stycznia'; break;
      case 'cze': dateTab[1] = 'czerwca'; break;
      case 'gru': dateTab[1] = 'grudnia'; break;
      case 'mar': dateTab[1] = 'marca'; break;
    }
    dateTab.forEach((el, ind) => {
      if (ind === 2) { el += ' godzina'; }
      datePlForm += el + ' ';
    });
  }
    return datePlForm;
  }

}
