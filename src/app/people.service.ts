import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material';
import { DialogAlreadyExistsComponent } from './dialog-already-exists/dialog-already-exists.component';

@Injectable({
  providedIn: 'root',
})
export class PeopleService {
  people: string[] = ['Allan', 'Grace', 'Samuel'];
  constructor(public dialog: MatDialog) {}

  addPerson(name: string) {
    if (this.people.includes(name)) {
      this.dialog.open(DialogAlreadyExistsComponent, { data: name });
    } else {
      this.people.unshift(name);
    }
  }

  deleteName(index: number) {
    console.log(index);
    this.people.splice(index, 1);
  }

  clearAll() {
    this.people = [];
  }
}
