import { Component, OnInit } from '@angular/core';
import { PeopleService } from '../people.service';

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.scss'],
})
export class PeopleComponent implements OnInit {
  people: string[];
  name: string;

  constructor(private peopleService: PeopleService) {}

  ngOnInit() {
    this.people = this.peopleService.people;
  }

  addPerson(name: string, nameRef) {
    this.peopleService.addPerson(name);
    this.name = '';
    nameRef.reset();
  }

  deleteName(index: number) {
    this.peopleService.deleteName(index);
  }

  fetchNames() {
    this.peopleService.fetchNames();
  }

  clearAll() {
    this.peopleService.clearAll();
    this.people = this.peopleService.people;
  }
}
