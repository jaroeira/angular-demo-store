import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Product } from '../../model/product';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss'],
})
export class ProductsListComponent implements OnInit {
  products$!: Observable<Product[]>;

  category: string = '';

  constructor(
    private activatedRoute: ActivatedRoute,
    private productService: ProductService
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      const category = params['category'];
      this.category = category;
      this.productService.fetchProductsByCategory(category);
      this.products$ = this.productService.productsByCategory;
    });
  }
}
