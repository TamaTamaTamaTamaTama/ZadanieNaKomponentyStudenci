import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-manage-interest-list',
  standalone: true,
  imports: [],
  templateUrl: './manage-interest-list.component.html',
  styleUrl: './manage-interest-list.component.css'
})
export class ManageInterestListComponent {
  @Input() interestList: string[] | undefined;
  @Input() selected:number|undefined;
  @Output() selectInParent: EventEmitter<number> = new EventEmitter();

  selectInChild(which:number):void{
    // this.selected=which;
    this.selectInParent.emit(which);
  }

}
