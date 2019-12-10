import { Component, OnInit } from '@angular/core';

import { PeopleService } from '../people.service';

@Component({
  selector: 'app-receipt-items',
  templateUrl: './receipt-items.component.html',
  styleUrls: ['./receipt-items.component.scss'],
})
export class ReceiptItemsComponent implements OnInit {
  people: string[];
  constructor(private peopleService: PeopleService) {}

  ngOnInit() {
    this.people = this.peopleService.people;
  }
}
