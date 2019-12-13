import { Component, OnInit, Inject } from '@angular/core';
import { MatBottomSheetRef, MAT_BOTTOM_SHEET_DATA } from '@angular/material';

@Component({
  selector: 'app-drag-drop-bottom-sheet',
  templateUrl: './drag-drop-bottom-sheet.component.html',
  styleUrls: ['./drag-drop-bottom-sheet.component.scss'],
})
export class DragDropBottomSheetComponent implements OnInit {
  constructor(@Inject(MAT_BOTTOM_SHEET_DATA) public data: any) {}

  ngOnInit() {}
}
