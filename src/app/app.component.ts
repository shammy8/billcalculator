import { Component, OnInit } from '@angular/core';

import { Item } from './models/Item';
import { PeopleService } from './people.service';
import { MatDialog } from '@angular/material';
import { DialogAlreadyExistsComponent } from './dialog-already-exists/dialog-already-exists.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'Bill Calculator';
  items: Item[];
  people: string[];
  amountToPay = [];
  displayedColumns: string[] = ['name', 'items', 'amount'];

  constructor(
    private peopleService: PeopleService,
    private dialog: MatDialog
  ) {}

  ngOnInit() {
    this.people = this.peopleService.people;
    this.peopleService.peopleChanged.subscribe((people: string[]) => {
      this.people = people;
    });
  }

  // if there are people in the people service it will return true allowing user to go to 2nd step of stepper
  moreThan0People() {
    return this.people.length > 0 ? true : false;
  }

  calculate(items: Item[]) {
    const christmasDay = new Date('12/23/2019').toDateString();
    const today = new Date().toDateString();

    for (const item of items) {
      if (
        item.name.toLowerCase() === 'christmas' &&
        item.price === 41 &&
        item.payers.includes('Allan ⭐') &&
        item.payers.includes('Grace 💗') &&
        today === christmasDay
      ) {
        this.dialog.open(DialogAlreadyExistsComponent, {
          data: 'ChristmasMessage',
        });
      }
    }

    this.items = items;

    this.amountToPay = this.people.map(person => {
      let totalAmountDue = 0;
      let itemsPaidFor = [];
      this.items.forEach(item => {
        if (item.payers.includes(person)) {
          totalAmountDue += item.price / item.payers.length;
          itemsPaidFor = [...itemsPaidFor, item.name];
        }
      });
      return { name: person, items: itemsPaidFor, amount: totalAmountDue };
    });
  }
}
