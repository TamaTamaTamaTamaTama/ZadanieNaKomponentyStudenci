import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-show-date',
  standalone: true,
  imports: [],
  templateUrl: './show-date.component.html',
  styleUrl: './show-date.component.css'
})
export class ShowDateComponent {
  @Input() dateToShow:Date | undefined ;
  @Input() title:string | undefined;
  @Input() className:string | undefined;
  @Input() format:string ="yyyy-mm-dd";

  printDate(): string {
    let retDate = '';
    if(this.dateToShow!==undefined){
        const el: string[] = this.format.split('-');

        let tmp: number;
        el.forEach((element, index) => {
          if (index > 0) { retDate += '-'; }
          switch (element) {
            case 'dd': tmp = this.dateToShow!.getDate() + 1; break;
            case 'mm': tmp = this.dateToShow!.getMonth() + 1; break;
            default: retDate += this.dateToShow!.getFullYear();
          }
          if (element !== 'yyyy') {
            tmp < 10 ? retDate += '0' + tmp : retDate += tmp;
          }
        }
        );
  }

    return retDate;
  }
  

}
