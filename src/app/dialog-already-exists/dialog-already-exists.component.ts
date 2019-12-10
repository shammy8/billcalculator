import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-dialog-already-exists',
  templateUrl: './dialog-already-exists.component.html',
  styleUrls: ['./dialog-already-exists.component.scss'],
})
export class DialogAlreadyExistsComponent implements OnInit {
  constructor(@Inject(MAT_DIALOG_DATA) public data: any) {}

  ngOnInit() {}
}
