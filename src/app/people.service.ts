import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class PeopleService {
  people: string[] = ['Allan', 'Person2', 'Person 3'];
  constructor() {}

  addPerson(name: string) {
    this.people.unshift(name);
  }
}
