import { Component, OnInit, Inject } from '@angular/core';
import { MatBottomSheetRef, MAT_BOTTOM_SHEET_DATA } from '@angular/material';
import {
  CdkDragDrop,
  moveItemInArray,
  transferArrayItem,
} from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-drag-drop-bottom-sheet',
  templateUrl: './drag-drop-bottom-sheet.component.html',
  styleUrls: ['./drag-drop-bottom-sheet.component.scss'],
})
export class DragDropBottomSheetComponent implements OnInit {
  selectedNames: string[] = ['Banana'];

  constructor(
    @Inject(MAT_BOTTOM_SHEET_DATA) public data: any,
    private bottomSheetRef: MatBottomSheetRef<DragDropBottomSheetComponent>
  ) {}

  ngOnInit() {
    this.selectedNames = [...this.data.addedNames];
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
  }

  onClick() {
    this.bottomSheetRef.dismiss(this.selectedNames);
  }
}
