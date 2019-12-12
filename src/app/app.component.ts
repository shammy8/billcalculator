import { Component, OnInit } from '@angular/core';

import { Item } from './models/Item';
import { PeopleService } from './people.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'Bill Calculator';
  items: Item[];
  people: string[];
  amountToPay = [
    // { name: 'Allan', amount: '19.98' },
    // { name: 'Adam', amount: '29.98' },
    // { name: 'Arron', amount: '39.98' },
  ];
  displayedColumns: string[] = ['name', 'amount'];

  constructor(private peopleService: PeopleService) {}

  ngOnInit() {
    this.people = this.peopleService.people;
  }

  // if there are people in the people service it will return true allowing user to go to 2nd step of stepper
  moreThan0People() {
    return this.people.length > 0 ? true : false;
  }

  calculate(items: Item[]) {
    this.items = items;

    this.amountToPay = this.people.map(person => {
      let amountToPay = 0;
      this.items.forEach(item => {
        if (item.payers.includes(person)) {
          amountToPay += item.price / item.payers.length;
        }
      });
      return { name: person, amount: amountToPay };
    });
  }
}
