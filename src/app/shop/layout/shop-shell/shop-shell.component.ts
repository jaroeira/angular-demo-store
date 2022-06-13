import { Component, OnInit } from '@angular/core';

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

  constructor() {}

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
    //TODO: navigate to category
  }
}
