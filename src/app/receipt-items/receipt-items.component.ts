import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { MatDialog } from '@angular/material';

import { DialogAlreadyExistsComponent } from '../dialog-already-exists/dialog-already-exists.component';
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
  payer: string;

  @Output() sendingItemsToApp = new EventEmitter<Item[]>();

  constructor(private peopleService: PeopleService, public dialog: MatDialog) {}

  ngOnInit() {
    this.people = this.peopleService.people;
    this.items = [
      { name: 'Steak', price: 23.99, payers: ['Allan'] },
      { name: 'Burger', price: 12.99, payers: ['Samuel'] },
      { name: 'Coke', price: 2.99, payers: ['Allan'] },
    ];
  }

  addItem(
    nameIn: string,
    priceIn: number,
    payerIn: HTMLSelectElement,
    nameRef,
    priceRef
  ) {
    this.items.push({
      name: nameIn,
      price: priceIn,
      payers: [payerIn.value],
    });

    this.item = '';
    this.itemPrice = null;
    this.payer = null;

    nameRef.reset();
    priceRef.reset();
  }

  addPayerToItem(index: number, payer: HTMLOptionElement) {
    if (this.items[index].payers.includes(payer.value)) {
      this.dialog.open(DialogAlreadyExistsComponent, { data: payer.value });
    } else {
      this.items[index].payers.push(payer.value);
    }
  }

  deletePayerFromItem(i: number, iOfPayer: number) {
    this.items[i].payers.splice(iOfPayer, 1);
  }

  deleteItem(index: number) {
    this.items.splice(index, 1);
  }

  clearAll() {
    this.items.splice(0, this.items.length);
  }

  calculate() {
    this.sendingItemsToApp.emit(this.items);
  }
}
