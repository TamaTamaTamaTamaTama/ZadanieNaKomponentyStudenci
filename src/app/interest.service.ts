import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class InterestService {

  constructor() { }

  interests:string[]=['tennis', 'programming', 'photography','singing'];

  get Interests():string[]{
    return this.interests;
  }
}
