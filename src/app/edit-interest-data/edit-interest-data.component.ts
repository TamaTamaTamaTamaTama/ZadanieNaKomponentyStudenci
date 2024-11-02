import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-edit-interest-data',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './edit-interest-data.component.html',
  styleUrl: './edit-interest-data.component.css'
})
export class EditInterestDataComponent {
  @Input() set interest(newValue: string){
    this.newInterestValue=newValue;
    this.oldInterestValue=newValue;
  }
  oldInterestValue:string | undefined;
  get interest():string|undefined{
      return this.oldInterestValue;
  }
  @Output() saveInterest: EventEmitter<string>=new EventEmitter();
  newInterestValue:string|undefined;

  constructor(){
    //this.newInterestValue=this.interest;
  }

  doSave():void{
    this.saveInterest.emit(this.newInterestValue);
  }

  doCancel():void{
    this.saveInterest.emit(this.interest);
  }

}
