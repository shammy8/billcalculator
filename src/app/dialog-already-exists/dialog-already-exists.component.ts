import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog-already-exists',
  templateUrl: './dialog-already-exists.component.html',
  styleUrls: ['./dialog-already-exists.component.scss'],
})
export class DialogAlreadyExistsComponent implements OnInit {
  headerMessage: string;
  message: string;
  message1: string;
  message2: string;
  message3: string;
  buttonMessage: string;

  constructor(@Inject(MAT_DIALOG_DATA) public data: any) {}

  ngOnInit() {
    if (this.data === 'I 💗 U') {
      this.headerMessage = 'Hi Grace,';
      this.message = this.data;
      this.buttonMessage = 'x';
    } else if (this.data === 'ChristmasMessage') {
      this.headerMessage = 'To 腐乳';
      this.message = `You did it, you successfully completed the 2019 Christmas Challenge! `;
      // tslint:disable-next-line: max-line-length
      this.message1 = `This is a Bill Splitter or you can call it a "Moments Sharer". Behind this pop up box you can see two items in our "bill". Christmas is a time of joy and happiness, like this "bill" I hope we can "share" many more joyful moments between us. In the same way, we will also face many obstacles some as big as Mount Everest, I also hope we can "share" our challenges and hardships between us.`;
      // tslint:disable-next-line: max-line-length
      this.message2 = `Your Christmas present is hidden in your room, I hope it can shine a light for you health as the star did for the wise men 2000 plus years ago.`;
      this.message3 = `Merry Christmas and a Happy New Year.`;

      this.buttonMessage = 'Love Allan';
    } else {
      this.headerMessage = 'Error: Already Exists';
      this.message = `${this.data} already in the list.`;
      this.buttonMessage = 'OK';
    }
  }
}
