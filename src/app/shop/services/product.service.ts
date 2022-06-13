import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, map } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Category } from '../model/Category';

const API_URL = environment.apiUrl + '/products';

@Injectable({ providedIn: 'root' })
export class ProductService {
  //State

  //Categories
  private _categories = new BehaviorSubject<Category[]>([]);
  readonly categories = this._categories.asObservable();
  private storedCategories: Category[] = [];

  constructor(private http: HttpClient) {}

  fetchCategories() {
    if (this.storedCategories.length > 0) {
      this._categories.next([...this.storedCategories]);
      return;
    }

    this.http
      .get<string[]>(`${API_URL}/categories`)
      .pipe(
        map((response) => {
          return response.map((data) => {
            return { label: data, path: encodeURI(data) };
          });
        })
      )
      .subscribe((categories: Category[]) => {
        console.log('fetchCategories', categories);
        this.storedCategories = [...categories];
        this._categories.next([...categories]);
      });
  }
}
