import { Injectable } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  private url = 'http://localhost:3000/receipts';

  constructor(private http: HttpClient) { }


  getReceiptbyIngredient(ingredient, diet?){
    const options = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
      body: {
        diet
      },
    };

    return this.http.get(this.url + '/' + ingredient, options) ;

   }
}
