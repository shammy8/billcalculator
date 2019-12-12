import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-dialog-already-exists',
  templateUrl: './dialog-already-exists.component.html',
  styleUrls: ['./dialog-already-exists.component.scss'],
})
export class DialogAlreadyExistsComponent implements OnInit {
  headerMessage: string;
  message: string;
  buttonMessage: string;

  constructor(@Inject(MAT_DIALOG_DATA) public data: any) {}

  ngOnInit() {
    if (this.data === 'I 💗 U') {
      this.headerMessage = 'Hi Grace,';
      this.message = this.data;
      this.buttonMessage = 'x';
    } else {
      this.headerMessage = 'Error: Already Exists';
      this.message = `${this.data} already in the list.`;
      this.buttonMessage = 'OK';
    }
  }
}
