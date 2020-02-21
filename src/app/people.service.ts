import { Injectable, EventEmitter } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogAlreadyExistsComponent } from './dialog-already-exists/dialog-already-exists.component';
import { HttpClient } from '@angular/common/http';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { DragDropBottomSheetComponent } from './drag-drop-bottom-sheet/drag-drop-bottom-sheet.component';

@Injectable({
  providedIn: 'root',
})
export class PeopleService {
  people: string[] = [];
  peopleChanged = new EventEmitter<string[]>();

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
      this.peopleChanged.emit([...this.people]);
    }
  }

  deleteName(index: number) {
    this.people.splice(index, 1);
    this.peopleChanged.emit([...this.people]);
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
          // for (const name of selectedNames) {
          //   if (!this.people.includes(name)) {
          //     this.people.push(name);
          //   }
          // }
          this.people = selectedNames;
          this.peopleChanged.emit(this.people);
        });
        sheet.backdropClick().subscribe(() => {
          sheet.dismiss(this.people);
        });
      });
  }

  clearAll() {
    this.people.splice(0, this.people.length);
  }
}
