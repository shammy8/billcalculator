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
    } else if (this.data === 'ChristmasMessage') {
      this.headerMessage = 'To 腐乳';
      this.message =
        // tslint:disable-next-line: max-line-length
        `You did it, You successfully completed the 2019 Christmas Challenge! This is a Bill Splitter or you can call it a "Sharer". You can see two items in our "bill", behind this pop up box. Christmas is a time of joy and happiness, like this "bill" I hope we can "Share" many joyful moment between us. In the same way, we will also face many obstacles some as high as Mount Everest, I also hope we can "Share" our challenges and hardships between us. Your Christmas present is hidden in your room. I hope it can shine a light for you health as the star did for the wisemen 2000 plus years ago. Merry Christms and a Happy New Year.`;
      this.buttonMessage = 'Love Allan';
    } else {
      this.headerMessage = 'Error: Already Exists';
      this.message = `${this.data} already in the list.`;
      this.buttonMessage = 'OK';
    }
  }
}
