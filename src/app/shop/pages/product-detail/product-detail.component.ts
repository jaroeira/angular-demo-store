import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { LoadingService } from 'src/app/shared/services/loading.service';
import { Product } from '../../model/product';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss'],
})
export class ProductDetailComponent implements OnInit {
  product?: Product;
  isLoading$!: Observable<boolean>;

  constructor(
    private activatedRoute: ActivatedRoute,
    private productService: ProductService,
    private loadingService: LoadingService
  ) {}

  ngOnInit(): void {
    this.isLoading$ = this.loadingService.isLoading;

    this.activatedRoute.params.subscribe((params) => {
      const productId = +params['id'];
      this.productService.fetchProductById(productId).subscribe((product) => {
        console.log('Product', product);
        this.product = product;
      });
    });
  }

  rating() {
    if (this.product) {
      return new Array(this.product.rating);
    }

    return [];
  }
}
