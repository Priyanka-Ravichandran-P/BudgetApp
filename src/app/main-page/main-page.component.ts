import { Component, OnInit } from '@angular/core';
import { BudgetItem } from 'src/shared/models/budget-item-model';
import { UpdateEvent } from '../budget-item-list/budget-item-list.component';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent implements OnInit {
  budgetItems: BudgetItem[] = new Array<BudgetItem>();
  total: number = 0;
  constructor() { }

  ngOnInit(): void {
  }
  getTotalAmount() {
    this.total = 0;
    this.budgetItems.map((item) => this.total += item.amount)
  }
  addItem(newItem: BudgetItem) {
    this.budgetItems.push(newItem);
    // this.total += newItem.amount;
    this.getTotalAmount();
  }
  deleteItems(item: BudgetItem) {
    let index = this.budgetItems.indexOf(item);
    this.budgetItems.splice(index, 1);
    // this.total -= item.amount;
    this.getTotalAmount();
  }
  updateItem(updateEvent: UpdateEvent) {
    this.budgetItems[this.budgetItems.indexOf(updateEvent.old)] = updateEvent.new;
    //updating total amount to display
    // this.total -= updateEvent.old.amount;
    // this.total += updateEvent.new.amount;
    this.getTotalAmount();
  }
}
