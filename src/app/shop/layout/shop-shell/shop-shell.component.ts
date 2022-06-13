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
    { label: 'cart', path: '' },
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
}
