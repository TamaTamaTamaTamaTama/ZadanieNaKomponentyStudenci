import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ShowDateComponent } from "../show-date/show-date.component";
import { ManageInterestListComponent } from "../manage-interest-list/manage-interest-list.component";
import { EditInterestDataComponent } from '../edit-interest-data/edit-interest-data.component';
import { NgModule, LOCALE_ID } from '@angular/core';
import { MyPipePipe } from '../my-pipe.pipe';
import { PlDatePipe } from '../pl-date.pipe';
import { FilterDataPipe } from '../filter-data.pipe';
import { InterestService } from '../interest.service';

@Component({
  selector: 'app-business',
  standalone: true,
  imports: [FilterDataPipe,PlDatePipe,MyPipePipe,CommonModule, FormsModule, ShowDateComponent, ManageInterestListComponent, EditInterestDataComponent],
  templateUrl: './business.component.html',
  providers: [{ provide: LOCALE_ID, useValue: 'pl' }],
  styleUrl: './business.component.css'
})
export class BusinessComponent {
  name: string;
  surname: string;
  dateOfBirth: Date;
  interests: string[];
  selected=-1;

  constructor(private interstService: InterestService) { 
    this.name = 'Joanna';
    this.surname = 'Krupa';
    this.dateOfBirth = new Date('2000-03-18');
    this.interests = interstService.Interests;
  }

  select(which:number):void{
    this.selected=which;
  }

  saveChangedInterest(newInterest:string):void{
    this.interests[this.selected]=newInterest;
    this.selected=-1;
  }

  messageMapping: {[k: string]: string} = {
    '=0': 'No messages.',
    '=1': 'One message.',
    'other': '# messages.',
  };

  studentcount: {[k: string]: string} = {
    '=0': '# studentów.',
    '=1': '# student.',
    'other': '# studentów.',
  };
}
