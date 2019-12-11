import { Component, OnInit } from '@angular/core';

import { PeopleService } from '../people.service';
import { Item } from '../models/Item';

@Component({
  selector: 'app-receipt-items',
  templateUrl: './receipt-items.component.html',
  styleUrls: ['./receipt-items.component.scss'],
})
export class ReceiptItemsComponent implements OnInit {
  people: string[];
  items: Item[];
  item: string;
  itemPrice: number;

  constructor(private peopleService: PeopleService) {}

  ngOnInit() {
    this.people = this.peopleService.people;
    this.items = [
      { name: 'Steak', price: 23.99, payers: ['Allan', 'Grace'] },
      { name: 'Burger', price: 12.99, payers: ['Samuel'] },
      { name: 'Coke', price: 2.99, payers: ['Allan'] },
    ];
  }

  addItem(nameIn: string, priceIn: number) {
    this.items.push({ name: nameIn, price: priceIn, payers: [] });
    this.item = '';
    this.itemPrice = null;
  }

  deleteItem(index: number) {
    this.items.splice(index, 1);
  }

  clearAll() {
    this.items.splice(0, this.items.length);
  }
}
