import { Component, OnInit } from '@angular/core';

import { PeopleService } from '../people.service';
import { NgForm } from '@angular/forms';

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

  addPerson(name: string, formRef: NgForm) {
    this.peopleService.addPerson(name);
    formRef.resetForm();
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
