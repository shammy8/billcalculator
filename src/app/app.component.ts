import { Component, OnInit } from '@angular/core';

import { Item } from './models/Item';
import { PeopleService } from './people.service';
import { MatDialog } from '@angular/material/dialog';
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
    // return this.people.length === 0 || this.people == null ? false : true;
    if (this.people == null) {
      return false;
    } else {
      if (this.people.length >= 1) {
        return true;
      } else {
        return false;
      }
    }
  }

  calculate(items: Item[]) {
    console.log(items);
    const christmasDay = new Date('12/25/2019').toDateString();
    const today = new Date().toDateString();

    if (
      items[0].name.toLowerCase() === 'christmas' &&
      items[0].price === 16 &&
      items[0].sharers.includes('Allan ⭐') &&
      items[0].sharers.includes('Grace 💗') &&
      items[1].name.toLowerCase() === 'everest' &&
      items[1].price === 12.17 &&
      items[1].sharers.includes('Allan ⭐') &&
      items[1].sharers.includes('Grace 💗') &&
      today === christmasDay
    ) {
      this.dialog.open(DialogAlreadyExistsComponent, {
        data: 'ChristmasMessage',
      });
    }

    this.items = items;

    this.amountToPay = this.people.map((person) => {
      let totalAmountDue = 0;
      let itemsPaidFor = [];
      this.items.forEach((item) => {
        if (item.sharers.includes(person)) {
          totalAmountDue += item.price / item.sharers.length;
          itemsPaidFor = [...itemsPaidFor, item.name];
        }
      });
      return { name: person, items: itemsPaidFor, amount: totalAmountDue };
    });

    const obj = this.createObjectWithEveryone(this.createObjectWithEveryone(0));

    this.items.forEach((item) => {
      item.sharers.forEach((sharer) => {
        obj[item.paidBy][sharer] += item.price / item.sharers.length;
        obj[sharer][item.paidBy] -= item.price / item.sharers.length;
      });
    });
  }

  private createObjectWithEveryone(value: any) {
    const object = {};
    this.people.forEach((person) => {
      if (typeof value === 'object' && value !== null) {
        object[person] = { ...value };
      } else {
        object[person] = value;
      }
    });
    return object;
  }
}
