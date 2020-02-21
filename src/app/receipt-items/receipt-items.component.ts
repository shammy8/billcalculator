import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSelect } from '@angular/material/select';

import { DialogAlreadyExistsComponent } from '../dialog-already-exists/dialog-already-exists.component';
import { PeopleService } from '../people.service';
import { Item } from '../models/Item';
import { NgForm } from '@angular/forms';

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
    this.peopleService.peopleChanged.subscribe((people: string[]) => {
      this.people = people;
    });
    this.items = [];
  }

  addItem(nameIn: string, priceIn: number, payerIn: string, form: NgForm) {
    this.items.push({
      name: nameIn,
      price: priceIn,
      payers: [payerIn],
    });

    form.resetForm();
  }

  addPayerToItem(index: number, payer: MatSelect) {
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
