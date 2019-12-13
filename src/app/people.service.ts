import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material';
import { DialogAlreadyExistsComponent } from './dialog-already-exists/dialog-already-exists.component';
import { HttpClient } from '@angular/common/http';
import { MatBottomSheet } from '@angular/material';
import { DragDropBottomSheetComponent } from './drag-drop-bottom-sheet/drag-drop-bottom-sheet.component';

@Injectable({
  providedIn: 'root',
})
export class PeopleService {
  people: string[] = ['Allan ⭐', 'Samuel'];

  constructor(
    public dialog: MatDialog,
    private http: HttpClient,
    private bottomSheet: MatBottomSheet
  ) {}

  addPerson(name: string) {
    name = name.trim();

    if (name === 'grace' || name === 'Grace') {
      name = 'Grace 💗';
      this.dialog.open(DialogAlreadyExistsComponent, { data: 'I 💗 U' });
    }
    if (name === 'Allan') {
      name = 'Allan ⭐';
    }
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

  fetchNames() {
    return this.http
      .get<string[]>(
        'https://bill-calculator-eaac9.firebaseio.com/friends.json'
      )
      .subscribe(response => {
        const sheet = this.bottomSheet.open(DragDropBottomSheetComponent, {
          data: { fetchedNames: response, addedNames: this.people },
        });
        sheet.afterDismissed().subscribe(selectedNames => {
          for (const name of selectedNames) {
            if (!this.people.includes(name)) {
              this.people.push(name);
            }
            // this.people = selectedNames;
            // console.log(selectedNames);
          }
        });
      });
  }

  clearAll() {
    this.people.splice(0, this.people.length);
  }
}
