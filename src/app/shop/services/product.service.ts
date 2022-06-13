import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, map } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Category } from '../model/Category';
import { Product, transformFromJSON } from '../model/product';

const API_URL = environment.apiUrl + '/products';

@Injectable({ providedIn: 'root' })
export class ProductService {
  //State

  //Categories
  private _categories = new BehaviorSubject<Category[]>([]);
  readonly categories = this._categories.asObservable();
  private storedCategories: Category[] = [];

  //Products by category
  private _productsByCategory = new BehaviorSubject<Product[]>([]);
  readonly productsByCategory = this._productsByCategory.asObservable();

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

  fetchProductsByCategory(categoryName: string) {
    if (!categoryName)
      throw new Error('must provide category to fetchProductsByCategory');

    this.http
      .get<any[]>(`${API_URL}/category/${categoryName}`)
      .pipe(
        map((response) => {
          return response.map((data) => {
            return transformFromJSON(data);
          });
        })
      )
      .subscribe((products) => {
        console.log('products', products);
        this._productsByCategory.next([...products]);
      });
  }
}
