import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-shop-shell',
  templateUrl: './shop-shell.component.html',
  styleUrls: ['./shop-shell.component.scss'],
})
export class ShopShellComponent implements OnInit {
  headerLinks = [
    { label: 'home', path: '' },
    { label: 'categories', path: '' },
  ];

  showCategoriesMenu = false;

  constructor(private router: Router) {}

  ngOnInit(): void {}

  onCategoriesMenuClose() {
    this.showCategoriesMenu = false;
  }

  onCategoriesClicked() {
    this.showCategoriesMenu = true;
  }

  onCategorySelected(category: string) {
    console.log('onCategorySelected', category);
    this.showCategoriesMenu = false;
    this.router.navigate(['/products-list/', category]);
  }
}
