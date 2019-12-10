import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material';
import { DialogAlreadyExistsComponent } from './dialog-already-exists/dialog-already-exists.component';

@Injectable({
  providedIn: 'root',
})
export class PeopleService {
  people: string[] = ['Allan', 'Person2', 'Person 3'];
  constructor(public dialog: MatDialog) {}

  addPerson(name: string) {
    if (this.people.includes(name)) {
      console.log(`${name} already on the list`);
      this.dialog.open(DialogAlreadyExistsComponent, { data: name });
    } else {
      this.people.unshift(name);
    }
  }
}
