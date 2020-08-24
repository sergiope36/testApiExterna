import { FoodService } from './../../shared/food.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.scss']
})
export class ViewComponent implements OnInit {

  public receipts;

  constructor(private api: FoodService) { }


  showReceiptbyIngredient(ingredient): Observable <void> {

    this.api.getReceiptbyIngredient(ingredient).subscribe((data) => this.receipts = data);
    return this.receipts;
  }

  ngOnInit(): void {
  }

}
