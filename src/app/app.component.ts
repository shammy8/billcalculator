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
  amountToPay;
  displayedColumns: string[] = ['name', 'amount'];

  constructor(private peopleService: PeopleService) {}

  ngOnInit() {
    this.people = this.peopleService.people;
    this.amountToPay = [
      { name: 'Allan', amount: '19.98' },
      { name: 'Adam', amount: '29.98' },
      { name: 'Arron', amount: '39.98' },
    ];
  }

  calculate(items: Item[]) {
    this.items = items;
    console.log(this.items);
  }
}
