import { Component, OnInit, Inject } from '@angular/core';
import {
  MatBottomSheetRef,
  MAT_BOTTOM_SHEET_DATA,
  MatDialog,
} from '@angular/material';
import {
  CdkDragDrop,
  moveItemInArray,
  transferArrayItem,
} from '@angular/cdk/drag-drop';
import { DialogAlreadyExistsComponent } from '../dialog-already-exists/dialog-already-exists.component';

@Component({
  selector: 'app-drag-drop-bottom-sheet',
  templateUrl: './drag-drop-bottom-sheet.component.html',
  styleUrls: ['./drag-drop-bottom-sheet.component.scss'],
})
export class DragDropBottomSheetComponent implements OnInit {
  selectedNames: string[] = ['Banana'];

  constructor(
    @Inject(MAT_BOTTOM_SHEET_DATA) public data: any,
    private bottomSheetRef: MatBottomSheetRef<DragDropBottomSheetComponent>,
    public dialog: MatDialog
  ) {}

  ngOnInit() {
    this.selectedNames = [...this.data.addedNames];

    const tempFetchnames = [];
    for (const name of this.data.fetchedNames) {
      if (!this.selectedNames.includes(name)) {
        tempFetchnames.push(name);
      }
    }
    this.data.fetchedNames = [...tempFetchnames];
  }

  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer !== event.container) {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    } else {
      moveItemInArray(
        this.data.fetchedNames,
        event.previousIndex,
        event.currentIndex
      );
    }
    console.log(event.previousContainer);
    if (event.container.data[event.currentIndex] === 'Grace 💗') {
      this.dialog.open(DialogAlreadyExistsComponent, { data: 'I 💗 U' });
    }
  }

  onClick() {
    this.bottomSheetRef.dismiss(this.selectedNames);
  }
}
