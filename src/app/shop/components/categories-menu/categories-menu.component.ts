import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Observable } from 'rxjs';
import { Category } from '../../model/Category';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-categories-menu',
  templateUrl: './categories-menu.component.html',
  styleUrls: ['./categories-menu.component.scss'],
})
export class CategoriesMenuComponent implements OnInit {
  @Input() show: boolean = false;
  @Output() closeClicked = new EventEmitter<void>();
  @Output() backdropClicked = new EventEmitter<void>();
  @Output() categoryClicked = new EventEmitter<string>();

  categories$!: Observable<Category[]>;

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.categories$ = this.productService.categories;
    this.productService.fetchCategories();
  }
}
